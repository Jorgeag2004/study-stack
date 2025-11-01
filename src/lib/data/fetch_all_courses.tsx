import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { courses_table } from "@/db/schema";
import { Course } from '@/types/course'

const db = drizzle(process.env.DATABASE_URL!)

export async function fetchAllCourses(): Promise<Course[]> {
    return db.select().from(courses_table);
}