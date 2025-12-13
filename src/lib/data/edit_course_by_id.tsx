import { Course } from '@/types/course'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { courses_table } from "@/db/schema";

export async function edit_course_by_id(course: Course): Promise<void> {
    const db = drizzle(process.env.DATABASE_URL!)

    await db.update(courses_table)
        .set({name: course.name, icon: course.icon})
        .where(eq(courses_table.id, course.id))
}