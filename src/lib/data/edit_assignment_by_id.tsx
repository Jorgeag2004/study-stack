'use server'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {assignments_table} from "@/db/schema";
import { revalidatePath } from "next/cache";

interface edit_assignment_props {
    id: string;
    name?: string;
    due_date?: string;
}

export async function edit_assignment_by_id({id, name, due_date}: edit_assignment_props): Promise<void> {

    const db = drizzle(process.env.DATABASE_URL!);

    if (name) {
        await db.update(assignments_table)
            .set({name: name}).where(eq(assignments_table.id, id))
    }

    if (due_date) {
        await db.update(assignments_table)
            .set({due_date: due_date}).where(eq(assignments_table.id, id))
    }

    revalidatePath('/')
}
