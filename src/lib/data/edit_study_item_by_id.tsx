import { StudyItem } from '@/types/study_item'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { study_items_table } from "@/db/schema";

export async function edit_study_item_by_id(study_item: StudyItem): Promise<void> {
    const db = drizzle(process.env.DATABASE_URL!)

    await db.update(study_items_table)
        .set({name: study_item.name, last_review: study_item.last_review, star_rating: study_item.star_rating})
        .where(eq(study_items_table.id, study_item.id))
}
