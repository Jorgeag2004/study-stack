'use server'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { study_items_table } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { fetch_course_name_by_id } from "@/lib/data/fetch_course_name_by_id";

const db = drizzle(process.env.DATABASE_URL!);

export async function add_study_item(name: string, star_rating: number, last_review: string, course_id: string): Promise<void> {

    const course_name: string = await fetch_course_name_by_id(course_id);

    await db.insert(study_items_table).values({name: name, course_name: course_name, star_rating: star_rating,
        last_review: last_review, course_id: course_id})
    revalidatePath('/') 
}