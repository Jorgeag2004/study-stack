import { StudyItem } from "@/types/study_item";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { study_items_table } from "@/db/schema";
import { getStudyItemSortValue } from "@/utils/GetStudyItemSortValue";

import { db } from '@/db/db';

export async function fetch_all_study_items(): Promise<StudyItem[]> {
    const study_items: StudyItem[] = await db.select().from(study_items_table);

    return study_items.sort((a: StudyItem, b: StudyItem) => getStudyItemSortValue(b) - getStudyItemSortValue(a));
}