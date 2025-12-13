import { Assignment } from "@/types/assignment";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {assignments_table} from "@/db/schema";

export async function edit_assignment_by_id(assignment: Assignment): Promise<void> {

    const db = drizzle(process.env.DATABASE_URL!);

    await db.update(assignments_table)
        .set({name: assignment.name, course_name: assignment.course_name, due_date: assignment.due_date})
        .where(eq(assignments_table.id, assignment.id))
}
