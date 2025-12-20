'use server'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { learn_items_table } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { fetch_course_name_by_id } from "@/lib/data/fetch_course_name_by_id";

const db = drizzle(process.env.DATABASE_URL!);

export async function add_learn_item(name: string, date_covered: string, course_id: string): Promise<void> {

    const course_name: string = await fetch_course_name_by_id(course_id)

    await db.insert(learn_items_table).values({name: name, course_name: course_name, date_covered: date_covered, course_id: course_id})
    revalidatePath('/')
}
