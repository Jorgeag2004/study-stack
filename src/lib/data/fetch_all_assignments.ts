import {Assignment} from "@/types/assignment";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { assignments_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!)

export async function fetch_all_assignments(): Promise<Assignment[]> {
    return db.select().from(assignments_table);
}
