import { Assignment } from "@/types/assignment";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { assignments_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!)

export async function fetch_assignments_by_id(course_id: string): Promise<Assignment[]> {
    return db.select().from(assignments_table).where(eq(assignments_table.course_id, course_id));
}
