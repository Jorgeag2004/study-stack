import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { courses_table } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { db } from '@/db/db';

export const fetch_course_info_by_id = async (id: string): Promise<{ name: string; icon: string}> => {

    const res = await db.select({name: courses_table.name, icon: courses_table.icon}).from(courses_table)
        .where(eq(courses_table.id, id))

     return res[0]
}