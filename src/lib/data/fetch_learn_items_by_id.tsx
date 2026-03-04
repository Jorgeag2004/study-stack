import { LearnItem } from "@/types/learn_item";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { learn_items_table } from "@/db/schema";
import {get_days_diff} from "@/utils/DateUtils";

const db = drizzle(process.env.DATABASE_URL!)

export async function fetch_learn_items_by_id(course_id: string): Promise<LearnItem[]> {
    const learn_items: LearnItem[] = await db.select().from(learn_items_table).where(eq(learn_items_table.course_id, course_id));

    return learn_items.sort((a: LearnItem, b: LearnItem) => get_days_diff(a.date_covered) - get_days_diff(b.date_covered))
}