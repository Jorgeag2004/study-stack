import { StudyItem } from "@/types/study_item";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { study_items_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!)

export async function fetch_all_study_items(): Promise<StudyItem[]> {
    return db.select().from(study_items_table);
}