'use server'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {assignments_table} from "@/db/schema";
import {revalidatePath} from "next/cache";

import { db } from '@/db/db';

export async function delete_assignment_by_id(id: string): Promise<void> {

    await db.delete(assignments_table).where(eq(assignments_table.id, id))
    revalidatePath('/')
}
