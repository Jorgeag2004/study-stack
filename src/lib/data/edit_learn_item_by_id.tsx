import { LearnItem } from "@/types/learn_item";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {learn_items_table} from "@/db/schema";

export async function update_learn_item_by_id(learn_item: LearnItem): Promise<void> {
    const db = drizzle(process.env.DATABASE_URL!)

    await db.update(learn_items_table)
        .set({name: learn_item.name, date_covered: learn_item.date_covered})
        .where(eq(learn_items_table.id, learn_item.id));
}