'use server'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {study_items_table} from "@/db/schema";
import {revalidatePath} from "next/cache";

export async function delete_study_item_by_id(id: string): Promise<void> {

    const db = drizzle(process.env.DATABASE_URL!)

    await db.delete(study_items_table).where(eq(study_items_table.id, id))

    revalidatePath('/')
}
