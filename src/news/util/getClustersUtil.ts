import { Kysely, sql } from 'kysely';
import { jsonArrayFrom, jsonObjectFrom } from 'kysely/helpers/postgres';
import { DB } from 'src/kysely/types';

function getNewsMedia(db: Kysely<DB>) {
  return db
    .selectFrom('news')
    .leftJoin('news_media', (join) =>
      join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
    )
    .whereRef('news.clusterId', '=', sql.ref('cluster.id'))
    .select([
      'news_media.id',
      'news_media.name',
      'news_media.chinese_name',
      'news_media.imageUrl',
    ])
    .distinctOn('news_media.id');
}

function getMediaGeneralCampBreakdown(db: Kysely<DB>) {
  return db
    .selectFrom('news')
    .leftJoin('news_media', (join) =>
      join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
    )
    .whereRef('news.clusterId', '=', sql.ref('cluster.id'))
    .select([
      (eb) =>
        eb.fn
          .count(
            eb
              .case()
              .when(eb.ref('news_media.political_standing'), '<', 0.4)
              .then(eb.ref('news_media.name'))
              .end(),
          )
          .distinct()
          .as('blue_camp'),
      (eb) =>
        eb.fn
          .count(
            eb
              .case()
              .when(eb.ref('news_media.political_standing'), '>', 0.6)
              .then(eb.ref('news_media.name'))
              .end(),
          )
          .distinct()
          .as('green_camp'),
      (eb) =>
        eb.fn
          .count(
            eb
              .case()
              .when(
                eb.and([
                  eb('news_media.political_standing', '>=', 0.4),
                  eb('news_media.political_standing', '<=', 0.6),
                ]),
              )
              .then(eb.ref('news_media.name'))
              .end(),
          )
          .distinct()
          .as('grey_camp'),
    ]);
}

function getMediaSpecificCampBreakdown(db: Kysely<DB>) {
  return db
    .selectFrom('news')
    .leftJoin('news_media', (join) =>
      join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
    )
    .select((eb) => [
      jsonArrayFrom(
        eb
          .selectFrom('news_media')
          .select(['news_media.id', 'news_media.name', 'news_media.imageUrl'])
          .distinct()
          .leftJoin('news', (join) =>
            join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
          )
          .where('news_media.political_standing', '>=', 0.85)
          .whereRef('news.clusterId', '=', sql.ref('cluster.id')),
      ).as('deep_green_camp'),

      jsonArrayFrom(
        eb
          .selectFrom('news_media')
          .select(['news_media.id', 'news_media.name', 'news_media.imageUrl'])
          .distinct()
          .leftJoin('news', (join) =>
            join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
          )
          .where('news_media.political_standing', '>', 0.6)
          .where('news_media.political_standing', '<', 0.85)
          .whereRef('news.clusterId', '=', sql.ref('cluster.id')),
      ).as('light_green_camp'),

      jsonArrayFrom(
        eb
          .selectFrom('news_media')
          .select(['news_media.id', 'news_media.name', 'news_media.imageUrl'])
          .distinct()
          .leftJoin('news', (join) =>
            join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
          )
          .where('news_media.political_standing', '>=', 0.4)
          .where('news_media.political_standing', '<=', 0.6)
          .whereRef('news.clusterId', '=', sql.ref('cluster.id')),
      ).as('neutral_camp'),

      jsonArrayFrom(
        eb
          .selectFrom('news_media')
          .select(['news_media.id', 'news_media.name', 'news_media.imageUrl'])
          .distinct()
          .leftJoin('news', (join) =>
            join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
          )
          .where('news_media.political_standing', '>=', 0.16)
          .where('news_media.political_standing', '<', 0.4)
          .whereRef('news.clusterId', '=', sql.ref('cluster.id')),
      ).as('light_blue_camp'),

      jsonArrayFrom(
        eb
          .selectFrom('news_media')
          .select([
            'news_media.id',
            'news_media.name',
            'news_media.imageUrl',
            'news_media.political_standing',
          ])
          .distinct()
          .leftJoin('news', (join) =>
            join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
          )
          .where('news_media.political_standing', '<=', 0.15)
          .whereRef('news.clusterId', '=', sql.ref('cluster.id')),
      ).as('deep_blue_camp'),
    ])
    .limit(1);
}

function getMediaImages(db: Kysely<DB>) {
  return db
    .selectFrom((qb) =>
      qb
        .selectFrom('news')
        .select((eb) => sql`unnest(news.images)`.as('image'))
        .whereRef('news.clusterId', '=', sql.ref('cluster.id'))
        .as('flattened_images'),
    )
    .select((eb) => sql`coalesce(json_agg(image), '[]'::json)`.as('images'));
}

export default {
  getMediaGeneralCampBreakdown,
  getMediaSpecificCampBreakdown,
  getMediaImages,
  getNewsMedia,
};
