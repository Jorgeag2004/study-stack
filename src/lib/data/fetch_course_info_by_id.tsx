import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { courses_table } from "@/db/schema";
import { eq } from 'drizzle-orm';

export const fetch_course_info_by_id = async (id: string): Promise<{ name: string; icon: string}> => {

    console.log('DATABASE_URL:', process.env.DATABASE_URL);

    const db = drizzle(process.env.DATABASE_URL!)

    const res = await db.select({name: courses_table.name, icon: courses_table.icon}).from(courses_table)
        .where(eq(courses_table.id, id))

     return res[0]
}