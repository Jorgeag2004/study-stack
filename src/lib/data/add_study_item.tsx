import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { study_items_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!);

export async function add_study_item(name: string, course_name: string, star_rating: number, last_review: string, course_id: string): Promise<string> {
    const res = await db.insert(study_items_table).values({name: name, course_name: course_name, star_rating: star_rating,
        last_review: last_review, course_id: course_id}).returning({id: study_items_table.id})
    return res[0].id
}