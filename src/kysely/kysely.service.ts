// src/database/kysely.service.ts
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Kysely, PostgresDialect } from 'kysely';
import { Pool, types } from 'pg';
// Since PostgreSQL arrays are returned as strings, we need to parse them correctly
// Parse Topics{} into Topics[]
types.setTypeParser(18383, (val) => {
  if (val === '{}') return [];
  return val
    .slice(1, -1)
    .split(',')
    .map((v) => v.trim());
});

//  Parse Regions{} into Regions[]
types.setTypeParser(18409, (val) => {
  if (val === '{}') return [];
  return val
    .slice(1, -1)
    .split(',')
    .map((v) => v.trim());
});

// Parse Text{} into Text[]
types.setTypeParser(1009, (val) => {
  if (val === '{}') return [];
  return val
    .slice(1, -1)
    .split(',')
    .map((v) => v.trim());
});

import { DB } from './types';

@Injectable()
export class KyselyService implements OnModuleDestroy {
  private readonly db: Kysely<DB>;

  constructor() {
    this.db = new Kysely<DB>({
      dialect: new PostgresDialect({
        pool: new Pool({
          connectionString: process.env.DATABASE_URL,
          max: 10, // or even lower depending on your needs
          idleTimeoutMillis: 30000, // close idle clients after 30 seconds
          connectionTimeoutMillis: 2000, // timeout if connection takes too long
        }),
      }),
    });
  }

  get connection(): Kysely<DB> {
    return this.db;
  }

  async onModuleDestroy() {
    await this.db.destroy();
  }

  async onApplicationShutdown() {
    await this.db.destroy();
  }
}
