'use server'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import {learn_items_table} from "@/db/schema";
import { revalidatePath } from "next/cache";

import { db } from '@/db/db';

interface edit_learn_item_props {
    id: string;
    name?: string;
    date_covered?: string;
}

export async function edit_learn_item_by_id({id, name, date_covered}: edit_learn_item_props): Promise<void> {
    if (name) {
        await db.update(learn_items_table)
            .set({name: name}).where(eq(learn_items_table.id, id))
    }
    if (date_covered) {
        await db.update(learn_items_table)
            .set({date_covered: date_covered}).where(eq(learn_items_table.id, id))
    }

    revalidatePath('/')
}