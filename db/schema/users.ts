import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  date,
  time,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  user_id: serial("user_id").primaryKey(),
  first_name: text("first_name").notNull(),
  last_name: text("last_name").notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
});

export const loginSessions = pgTable("login_sessions", {
  session_id: serial("session_id").primaryKey(),
  user_id: serial("user_id")
    .notNull()
    .references(() => users.user_id),
  login_time: timestamp("login_time").notNull(),
  logout_time: timestamp("logout_time"),
});

export const Projects = pgTable("projects", {
  project_id: serial("project_id").primaryKey(),
  project_name: text("project_name").notNull(),
  user_id: serial("user_id")
    .notNull()
    .references(() => users.user_id),
  date_time: date("date"),
  work_minutes: time('work_minutes'),
});
