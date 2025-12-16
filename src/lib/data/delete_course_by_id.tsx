import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {learn_items_table, study_items_table, assignments_table, courses_table} from "@/db/schema";

export async function delete_course_by_id(id: string): Promise<void> {

    const db = drizzle(process.env.DATABASE_URL!)

    await db.delete(courses_table).where(eq(courses_table.id, id))

    await db.delete(learn_items_table).where(eq(learn_items_table.course_id, id))
    await db.delete(study_items_table).where(eq(study_items_table.course_id, id))
    await db.delete(assignments_table).where(eq(assignments_table.course_id, id))
}
