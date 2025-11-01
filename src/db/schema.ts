import { integer, uuid, text, pgTable} from "drizzle-orm/pg-core";

export const assignments_table = pgTable("assignments", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    course_name: text("course_name").notNull(),
    due_date: text("due_date").notNull(),
    course_id: uuid("course_id").notNull(),
})

export const courses_table = pgTable("courses", {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    icon: text('icon').notNull(),
})

export const learn_items_table = pgTable("learn_items", {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    course_name: text('course_name').notNull(),
    date_covered: text('date_covered').notNull(),
    course_id: uuid('course_id').notNull(),
})

export const study_items_table = pgTable("study_items", {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    course_name: text('course_name').notNull(),
    star_rating: integer('star_rating').notNull(),
    last_review: text('last_review').notNull(),
    course_id: uuid('course_id').notNull(),
})