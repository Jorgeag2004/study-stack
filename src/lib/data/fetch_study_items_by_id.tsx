import { StudyItem } from "@/types/study_item";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { study_items_table } from "@/db/schema";
import {getStudyItemSortValue} from "@/utils/GetStudyItemSortValue";

import { db } from '@/db/db';

export async function fetch_study_items_by_id(course_id: string): Promise<StudyItem[]> {
    const study_items: StudyItem[] = await db.select().from(study_items_table).where(eq(study_items_table.course_id, course_id));

    return study_items.sort((a: StudyItem, b: StudyItem) => getStudyItemSortValue(b) - getStudyItemSortValue(a));
}
