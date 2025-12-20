import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { courses_table } from "@/db/schema";
import { eq } from 'drizzle-orm';

export const fetch_course_name_by_id = async (id: string): Promise<string> => {

    const db = drizzle(process.env.DATABASE_URL!)

    const res = await db.select({name: courses_table.name}).from(courses_table)
        .where(eq(courses_table.id, id))

     return res[0].name
}