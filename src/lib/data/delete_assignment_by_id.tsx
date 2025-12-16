import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {assignments_table} from "@/db/schema";

export async function delete_assignment_by_id(id: string): Promise<void> {

    const db = drizzle(process.env.DATABASE_URL!)

    await db.delete(assignments_table).where(eq(assignments_table.id, id))
}
