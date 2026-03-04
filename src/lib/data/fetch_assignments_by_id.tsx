import { Assignment } from "@/types/assignment";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { assignments_table } from "@/db/schema";
import {get_days_diff} from "@/utils/DateUtils";

const db = drizzle(process.env.DATABASE_URL!)

export async function fetch_assignments_by_id(course_id: string): Promise<Assignment[]> {
    const assignments: Assignment[] = await db.select().from(assignments_table).where(eq(assignments_table.course_id, course_id));

    return assignments.sort((a: Assignment, b: Assignment) => get_days_diff(a.due_date) - get_days_diff(b.due_date));
}
