import { LearnItem } from "@/types/learn_item";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { learn_items_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!)

export async function fetch_learn_items_by_id(course_id: string): Promise<LearnItem[]> {
    return db.select().from(learn_items_table).where(eq(learn_items_table.course_id, course_id));
}