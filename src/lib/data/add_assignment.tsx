import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { assignments_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!);

export async function add_assignment(name: string, course_name:  string, due_date: string, course_id: string): Promise<string> {
    const res = await db.insert(assignments_table).values({name: name, course_name: course_name, due_date: due_date, course_id: course_id}).returning({id: assignments_table.id})
    return res[0].id
}

add_assignment('HW 8', "Physics II", '2025-12-10', 'c3333333-3333-4333-8333-333333333333')
