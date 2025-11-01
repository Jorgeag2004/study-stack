import { LearnItem } from "@/types/learn_item";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { learn_items_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!)

export async function fetch_all_learn_items(): Promise<LearnItem[]> {
    return db.select().from(learn_items_table);
}
