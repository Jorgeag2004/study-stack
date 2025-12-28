'use server'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { assignments_table } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { fetch_course_info_by_id } from "@/lib/data/fetch_course_info_by_id";

const db = drizzle(process.env.DATABASE_URL!);

export async function add_assignment(name: string, due_date: string, course_id: string): Promise<void> {

    const res= await fetch_course_info_by_id(course_id);

    const course_name: string = res.name

    await db.insert(assignments_table).values({name: name, course_name: course_name, due_date: due_date, course_id: course_id})
    revalidatePath('/')
}

