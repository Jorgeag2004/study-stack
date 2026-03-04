import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { courses_table } from "@/db/schema";
import { Course } from '@/types/course'

import { db } from '@/db/db';

export async function fetch_all_courses(): Promise<Course[]> {
    return db.select().from(courses_table);
}