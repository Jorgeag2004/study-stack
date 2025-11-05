import { Course } from '@/types/course'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { courses_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!);

export async function add_course(name: string, icon: string): Promise<string> {
    const res = await db.insert(courses_table).values({name: name, icon: icon}).returning({id: courses_table.id})
    return res[0].id
}