import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { learn_items_table } from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL!);

export async function add_learn_item(name: string, course_name:  string, date_covered: string, course_id: string): Promise<string> {
    const res = await db.insert(learn_items_table).values({name: name, course_name: course_name, date_covered: date_covered, course_id: course_id}).returning({id: learn_items_table.id})
    return res[0].id
}

add_learn_item('Dictionaries', "CS2100", '2025-11-10', 'b2222222-2222-4222-8222-222222222222')
