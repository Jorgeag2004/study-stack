import {Assignment} from "@/types/assignment";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { assignments_table } from "@/db/schema";
import { get_days_diff } from '@/utils/DateUtils'

const db = drizzle(process.env.DATABASE_URL!)

export async function fetch_all_assignments(): Promise<Assignment[]> {
    const assignments: Assignment[] = await db.select().from(assignments_table);

    return assignments.sort((a: Assignment, b: Assignment) => get_days_diff(a.due_date) - get_days_diff(b.due_date));
}
