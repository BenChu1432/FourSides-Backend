// Constants
const SEC = 1000;
const TAIPEI_OFFSET_MS = 8 * 60 * 60 * 1000;
const DAY_SEC = 86400;

// Internal helpers (no export)
function _nowUnix(): number {
  return Math.floor(Date.now() / 1000);
}

// Convert a UNIX seconds timestamp to Taipei civil Y-M-D
function _toTaipeiYMD(unixSec: number) {
  const ms = unixSec * SEC;
  // Shift UTC time by +8h to get Taipei civil components via UTC getters
  const d = new Date(ms + TAIPEI_OFFSET_MS);
  return {
    y: d.getUTCFullYear(),
    m: d.getUTCMonth(),
    d: d.getUTCDate(),
  };
}

// Determines if a given timestamp (in seconds or milliseconds) is between 1 AM and 5 AM Taipei time.
function isBetweenTaipei1And5AM(time: number): boolean {
  // Normalize to seconds if input is in milliseconds
  const isMilliseconds = time > 1_000_000_000_000; // ~1e12
  const timeSec = isMilliseconds ? Math.floor(time / 1000) : time;

  // Shift to Taipei time by adding the UTC+8 offset (in ms)
  const taipeiMs = timeSec * SEC + TAIPEI_OFFSET_MS;
  const taipeiDate = new Date(taipeiMs);

  const hour = taipeiDate.getUTCHours(); // Get hour in Taipei time

  return hour >= 1 && hour < 5;
}

// Start of day 00:00:00 in Taipei for the given Y-M-D, returned in UNIX seconds (UTC)
function _taipeiStartOfDayUnix(y: number, m: number, d: number): number {
  const utcMsAtTaipeiMidnight = Date.UTC(y, m, d) - TAIPEI_OFFSET_MS;
  return Math.floor(utcMsAtTaipeiMidnight / 1000);
}

// Public API (names unchanged)

function getUnixTimestamp() {
  return _nowUnix();
}

function getLast24HoursTimestamp() {
  return _nowUnix() - DAY_SEC;
}

function getLast72HoursTimestamp() {
  return _nowUnix() - DAY_SEC * 3;
}

function isNewDayAfterFinishedAt(
  finishedAt: number | null | undefined,
): boolean {
  // If there is no previous timestamp, treat it as a new day.
  if (finishedAt == null) {
    return true;
  }

  // Ensure the timestamp is in Unix seconds (convert from milliseconds if needed).
  const isMilliseconds = finishedAt > 1_000_000_000_000; // ~1e12
  const finishedAtSec = isMilliseconds
    ? Math.floor(finishedAt / 1000)
    : finishedAt;

  // Get "today" and "finished" calendar dates in the Taipei time zone.
  const nowSec = _nowUnix();
  const todayTaipei = _toTaipeiYMD(nowSec); // { y, m, d }
  const finishedTaipei = _toTaipeiYMD(finishedAtSec); // { y, m, d }

  // Compare by year, then month, then day (all in Taipei time).
  if (todayTaipei.y !== finishedTaipei.y) {
    return todayTaipei.y > finishedTaipei.y;
  }
  if (todayTaipei.m !== finishedTaipei.m) {
    return todayTaipei.m > finishedTaipei.m;
  }
  return todayTaipei.d > finishedTaipei.d;
}

function getStartOfTodayUnix(): number {
  const nowSec = _nowUnix();
  const { y, m, d } = _toTaipeiYMD(nowSec);
  return _taipeiStartOfDayUnix(y, m, d);
}

function isDaySkipped(lastUpdated: number): boolean {
  // Ensure the timestamp is in Unix seconds (convert from milliseconds if needed).
  const isMilliseconds = lastUpdated > 1_000_000_000_000; // ~1e12
  const lastUpdatedSec = isMilliseconds
    ? Math.floor(lastUpdated / 1000)
    : lastUpdated;

  // Current time in seconds.
  const nowSec = _nowUnix();

  // Convert both timestamps to Taipei calendar dates (year, month, day).
  const todayTaipei = _toTaipeiYMD(nowSec); // { y, m, d }
  const lastUpdatedTaipei = _toTaipeiYMD(lastUpdatedSec); // { y, m, d }

  // Compute the Unix seconds for the start of each day (00:00:00) in Taipei.
  const startOfTodayTaipei = _taipeiStartOfDayUnix(
    todayTaipei.y,
    todayTaipei.m,
    todayTaipei.d,
  );
  const startOfLastUpdatedDayTaipei = _taipeiStartOfDayUnix(
    lastUpdatedTaipei.y,
    lastUpdatedTaipei.m,
    lastUpdatedTaipei.d,
  );

  // Difference in whole days between the two day-starts.
  const differenceInDays = Math.floor(
    (startOfTodayTaipei - startOfLastUpdatedDayTaipei) / DAY_SEC,
  );

  // A day is considered "skipped" if there is a gap of two or more whole days
  // between the last updated day and today, measured in Taipei time.
  // Examples:
  // - Last updated yesterday -> differenceInDays = 1  => not skipped
  // - Last updated the day before yesterday -> differenceInDays >= 2 => skipped
  return differenceInDays >= 2;
}

export default {
  getUnixTimestamp,
  getLast24HoursTimestamp,
  getLast72HoursTimestamp,
  isNewDayAfterFinishedAt,
  getStartOfTodayUnix,
  isDaySkipped,
  isBetweenTaipei1And5AM,
};
