import { Identity } from 'src/kysely/types';

type VoteKey = 'support' | 'neutral' | 'oppose';
type StanceStats = Record<
  string,
  { support: number; neutral: number; oppose: number; total?: number }
>;

type IdentityStats = Record<
  string,
  { support: number; neutral: number; oppose: number; total?: number }
>;

type Summary = { support: number; neutral: number; oppose: number };
type TableRow = [string, ...string[]];

const DEFAULT_ORDER = ['深綠', '淺綠', '中立', '淺藍', '深藍'] as const;
const VOTE_ROWS: { key: VoteKey; label: string }[] = [
  { key: 'support', label: '支持' },
  { key: 'neutral', label: '中立' },
  { key: 'oppose', label: '反對' },
];

const IDENTITY_ORDER: readonly string[] = [
  Identity.台中人,
  Identity.台北人,
  Identity.台南人,
  Identity.台東人,
  Identity.嘉義人,
  Identity.基隆人,
  Identity.宜蘭人,
  Identity.屏東人,
  Identity.彰化人,
  Identity.新北人,
  Identity.新竹人,
  Identity.桃園人,
  Identity.澎湖人,
  Identity.花蓮人,
  Identity.苗栗人,
  Identity.連江人,
  Identity.金門人,
  Identity.雲林人,
  Identity.高雄人,
  Identity.南投人,
  Identity.其他,
] as const;

// helpers
function fmt(n: number, d: number) {
  const s = n.toFixed(d);
  // always append %
  return `${s}%`.replace('.0%', '%');
}

function roundArrayTo100(arr: number[], decimals: number): number[] {
  const factor = 10 ** decimals;

  // all zeros -> return zeros
  if (arr.every((v) => !isFinite(v) || v <= 0)) return arr.map(() => 0);

  // normalize to 100
  const sum = arr.reduce((a, b) => a + b, 0);
  const norm = sum > 0 ? arr.map((v) => (v / sum) * 100) : arr.map(() => 0);

  const scaled = norm.map((v) => Math.max(0, v * factor));
  const floors = scaled.map((v) => Math.floor(v));
  let remaining = Math.round(100 * factor - floors.reduce((a, b) => a + b, 0));

  if (remaining === 0) return floors.map((v) => v / factor);

  const out = [...floors];

  // Try to give to positive fractional parts first
  const fracs = scaled
    .map((v, i) => ({ i, frac: v - floors[i] }))
    .filter((x) => x.frac > 0)
    .sort((a, b) => b.frac - a.frac);

  for (let k = 0; k < fracs.length && remaining > 0; k++) {
    out[fracs[k].i] += 1;
    remaining--;
  }

  // Fallback: if still remaining (e.g., all fracs were 0), distribute from left to right
  let i = 0;
  while (remaining > 0) {
    out[i % out.length] += 1;
    i++;
    remaining--;
  }

  return out.map((v) => v / factor);
}

function roundColumnTo100(
  col: { support: number; neutral: number; oppose: number },
  decimals: number,
) {
  const [a, b, c] = roundArrayTo100(
    [col.support, col.neutral, col.oppose],
    decimals,
  );
  return { support: a, neutral: b, oppose: c };
}

// Round an entire grid so all cells sum to 100 overall
function roundGridTo100(grid: number[][], decimals: number): number[][] {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  if (rows === 0 || cols === 0) return grid.map((r) => r.map(() => 0));

  const factor = 10 ** decimals;
  const flat = grid.flat().map((v) => Math.max(0, v));
  const sum = flat.reduce((a, b) => a + b, 0);

  const norm = sum > 0 ? flat.map((v) => (v / sum) * 100) : flat.map(() => 0);
  const scaled = norm.map((v) => v * factor);
  const floors = scaled.map((v) => Math.floor(v));
  let remaining = Math.round(100 * factor - floors.reduce((a, b) => a + b, 0));

  const fracs = scaled
    .map((v, i) => ({ i, frac: v - floors[i] }))
    .sort((a, b) => b.frac - a.frac);

  const out = floors.slice();
  for (let k = 0; k < fracs.length && remaining > 0; k++) {
    out[fracs[k].i] += 1;
    remaining--;
  }
  // Fallback distribution if needed
  let i = 0;
  while (remaining > 0) {
    out[i % out.length] += 1;
    i++;
    remaining--;
  }

  // reshape to rows x cols
  const reshaped: number[][] = [];
  for (let r = 0; r < rows; r++) {
    reshaped.push(out.slice(r * cols, (r + 1) * cols).map((v) => v / factor));
  }
  return reshaped;
}

function buildStanceDistributions(params: {
  summary: Summary;
  stanceStats: StanceStats;
  order?: readonly string[];
  decimals?: number;
}) {
  const { summary, stanceStats, decimals = 0 } = params;
  const ORDER = params.order ?? DEFAULT_ORDER;

  // P(vote | stance) — columns sum to 100
  const perStancePct: Record<
    string,
    { support: number; neutral: number; oppose: number }
  > = {};

  for (const stance of ORDER) {
    const s = stanceStats[stance] ?? {
      support: 0,
      neutral: 0,
      oppose: 0,
      total: 0,
    };
    const total =
      s.total && s.total > 0 ? s.total : s.support + s.neutral + s.oppose;

    const raw = total
      ? {
          support: (s.support / total) * 100,
          neutral: (s.neutral / total) * 100,
          oppose: (s.oppose / total) * 100,
        }
      : { support: 0, neutral: 0, oppose: 0 };

    perStancePct[stance] = roundColumnTo100(raw, decimals);
  }

  const voteCompositionByStance: TableRow[] = VOTE_ROWS.map(
    ({ key, label }) => {
      const cells = ORDER.map((stance) =>
        fmt(perStancePct[stance]?.[key] ?? 0, decimals),
      );
      return [label, ...cells];
    },
  );

  // P(stance | vote) — rows sum to 100
  const totals = {
    support: summary.support ?? 0,
    neutral: summary.neutral ?? 0,
    oppose: summary.oppose ?? 0,
  };

  const stanceCompositionByVote: TableRow[] = VOTE_ROWS.map(
    ({ key, label }) => {
      const denom = totals[key] || 0;
      const raw = ORDER.map((stance) => {
        const s = stanceStats[stance] ?? { support: 0, neutral: 0, oppose: 0 };
        const n =
          key === 'support'
            ? s.support
            : key === 'neutral'
              ? s.neutral
              : s.oppose;
        return denom ? (n / denom) * 100 : 0;
      });
      const rounded = roundArrayTo100(raw, decimals);
      return [label, ...rounded.map((n) => fmt(n, decimals))];
    },
  );

  // P(vote, stance) — the entire grid sums to 100 overall
  const totalAll =
    (summary.support ?? 0) + (summary.neutral ?? 0) + (summary.oppose ?? 0);

  const jointMatrixRaw: number[][] = VOTE_ROWS.map(({ key }) =>
    ORDER.map((stance) => {
      const s = stanceStats[stance] ?? { support: 0, neutral: 0, oppose: 0 };
      const n =
        key === 'support'
          ? s.support
          : key === 'neutral'
            ? s.neutral
            : s.oppose;
      return totalAll > 0 ? (n / totalAll) * 100 : 0;
    }),
  );

  const jointRounded = roundGridTo100(jointMatrixRaw, decimals);

  const overallVoteDistributionByStance: TableRow[] = VOTE_ROWS.map(
    ({ label }, r) => [label, ...jointRounded[r].map((n) => fmt(n, decimals))],
  );

  return {
    voteCompositionByStance, // columns sum to 100 (P(vote | stance))
    stanceCompositionByVote, // rows sum to 100 (P(stance | vote))
    overallVoteDistributionByStance: overallVoteDistributionByStance, // entire grid sums to 100 (P(vote, stance))
  };
}

export function buildIdentityDistributions(params: {
  summary: Summary;
  identityStats: IdentityStats;
  order?: readonly string[];
  decimals?: number;
}) {
  const { summary, identityStats, decimals = 0 } = params;
  const ORDER = params.order ?? IDENTITY_ORDER;

  // P(vote | identity) — columns sum to 100
  const perIdentityPct: Record<
    string,
    { support: number; neutral: number; oppose: number }
  > = {};

  for (const id of ORDER) {
    const s = identityStats[id] ?? {
      support: 0,
      neutral: 0,
      oppose: 0,
      total: 0,
    };
    const total =
      s.total && s.total > 0 ? s.total : s.support + s.neutral + s.oppose;

    const raw = total
      ? {
          support: (s.support / total) * 100,
          neutral: (s.neutral / total) * 100,
          oppose: (s.oppose / total) * 100,
        }
      : { support: 0, neutral: 0, oppose: 0 };

    perIdentityPct[id] = roundColumnTo100(raw, decimals);
  }

  const voteCompositionByIdentity: TableRow[] = VOTE_ROWS.map(
    ({ key, label }) => {
      const cells = ORDER.map((id) =>
        fmt(perIdentityPct[id]?.[key] ?? 0, decimals),
      );
      return [label, ...cells];
    },
  );

  // P(identity | vote) — rows sum to 100
  const totals = {
    support: summary.support ?? 0,
    neutral: summary.neutral ?? 0,
    oppose: summary.oppose ?? 0,
  };

  const identityCompositionByVote: TableRow[] = VOTE_ROWS.map(
    ({ key, label }) => {
      const denom = totals[key] || 0;
      const raw = ORDER.map((id) => {
        const s = identityStats[id] ?? { support: 0, neutral: 0, oppose: 0 };
        const n =
          key === 'support'
            ? s.support
            : key === 'neutral'
              ? s.neutral
              : s.oppose;
        return denom ? (n / denom) * 100 : 0;
      });
      const rounded = roundArrayTo100(raw, decimals);
      return [label, ...rounded.map((n) => fmt(n, decimals))];
    },
  );

  // P(vote, identity) — entire grid sums to 100
  const totalAll =
    (summary.support ?? 0) + (summary.neutral ?? 0) + (summary.oppose ?? 0);

  const jointMatrixRaw: number[][] = VOTE_ROWS.map(({ key }) =>
    ORDER.map((id) => {
      const s = identityStats[id] ?? { support: 0, neutral: 0, oppose: 0 };
      const n =
        key === 'support'
          ? s.support
          : key === 'neutral'
            ? s.neutral
            : s.oppose;
      return totalAll > 0 ? (n / totalAll) * 100 : 0;
    }),
  );

  const jointRounded = roundGridTo100(jointMatrixRaw, decimals);

  const overallVoteDistributionByIdentity: TableRow[] = VOTE_ROWS.map(
    ({ label }, r) => [label, ...jointRounded[r].map((n) => fmt(n, decimals))],
  );

  return {
    voteCompositionByIdentity, // columns sum to 100 (P(vote | identity))
    identityCompositionByVote, // rows sum to 100 (P(identity | vote))
    overallVoteDistributionByIdentity, // grid sums to 100 (P(vote, identity))
  };
}

export default {
  buildStanceDistributions,
  buildIdentityDistributions,
};
