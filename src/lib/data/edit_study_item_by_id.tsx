import { StudyItem } from '@/types/study_item'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { study_items_table } from "@/db/schema";

interface edit_study_item_props {
    id: string;
    name?: string;
    last_review?: string;
    star_rating?: number;
}

export async function edit_study_item_by_id({id, name, last_review, star_rating}: edit_study_item_props): Promise<void> {
    const db = drizzle(process.env.DATABASE_URL!)

    if (name) {
        await db.update(study_items_table)
            .set({name: name}).where(eq(study_items_table.id, id))
    }
    if (last_review) {
        await db.update(study_items_table)
            .set({last_review: last_review}).where(eq(study_items_table.id, id))
    }
    if (star_rating) {
        await db.update(study_items_table)
            .set({star_rating: star_rating}).where(eq(study_items_table.id, id))
    }
}
