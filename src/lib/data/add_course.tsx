'use server'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { courses_table } from "@/db/schema";
import { revalidatePath } from "next/cache";

const db = drizzle(process.env.DATABASE_URL!);

export async function add_course(name: string, icon: string): Promise<void> {
    await db.insert(courses_table).values({name: name, icon: icon}).returning({id: courses_table.id})
    revalidatePath('/')
}

