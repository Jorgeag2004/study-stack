import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { courses_table } from "@/db/schema";
interface edit_course_props {
    id: string;
    name?: string;
    icon?: string;
}

export async function edit_course_by_id({id, name, icon}: edit_course_props): Promise<void> {
    const db = drizzle(process.env.DATABASE_URL!)

    if (name) {
        db.update(courses_table)
            .set({name: name}).where(eq(courses_table.id, id))
    }
    if (icon) {
        db.update(courses_table)
            .set({icon: icon}).where(eq(courses_table.id, id))
    }
}