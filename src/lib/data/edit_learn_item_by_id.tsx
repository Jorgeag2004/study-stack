import { LearnItem } from "@/types/learn_item";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {learn_items_table} from "@/db/schema";

interface update_learn_item_props {
    id: string;
    name?: string;
    date_covered?: string;
}

export async function update_learn_item_by_id({id, name, date_covered}: update_learn_item_props): Promise<void> {
    const db = drizzle(process.env.DATABASE_URL!)

    if (name) {
        await db.update(learn_items_table)
            .set({name: name}).where(eq(learn_items_table.id, id))
    }
    if (date_covered) {
        await db.update(learn_items_table)
            .set({date_covered: date_covered}).where(eq(learn_items_table.id, id))
    }
}