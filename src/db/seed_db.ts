import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres';
import { courses_table, learn_items_table, study_items_table, assignments_table} from "@/db/schema";
import {courses_data, assignments_data, learn_items_data, study_items_data} from "@/db/seed_data";

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL!,
// })

const db = drizzle(process.env.DATABASE_URL!)

async function main() {
    await db.insert(courses_table).values(courses_data);
    console.log('New courses created!')

    await db.insert(assignments_table).values(assignments_data);
    console.log('New assignments created!')

    await db.insert(learn_items_table).values(learn_items_data);
    console.log('New learn items created!')

    await db.insert(study_items_table).values(study_items_data);
    console.log('New study item created!')
}

main();