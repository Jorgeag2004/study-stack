// src/db/db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const globalForDb = globalThis as unknown as { pool: Pool };

const pool = globalForDb.pool ?? new Pool({
    connectionString: process.env.DATABASE_URL!,
    max: 10,              // max connections in pool
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

if (process.env.NODE_ENV !== 'production') {
    globalForDb.pool = pool; // reuse across hot reloads in dev
}

export const db = drizzle(pool);