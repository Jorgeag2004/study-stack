'use server'

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { courses_table, assignments_table, learn_items_table, study_items_table } from "@/db/schema";
import {revalidatePath} from "next/cache";

import { db } from '@/db/db';

interface edit_course_props {
    id: string;
    name?: string;
    icon?: string;
}

export async function edit_course_by_id({id, name, icon}: edit_course_props): Promise<void> {
    if (name) {
        await db.update(courses_table)
            .set({name: name}).where(eq(courses_table.id, id))

        await db.update(assignments_table)
            .set({course_name: name}).where(eq(assignments_table.course_id, id))
        await db.update(learn_items_table)
            .set({course_name: name}).where(eq(learn_items_table.course_id, id))
        await db.update(study_items_table)
            .set({course_name: name}).where(eq(study_items_table.course_id, id))
    }
    if (icon) {
        await db.update(courses_table)
            .set({icon: icon}).where(eq(courses_table.id, id))
    }

    revalidatePath('/')
}