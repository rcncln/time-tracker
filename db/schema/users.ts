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

export const projects = pgTable("projects", {
  project_id: serial("project_id").primaryKey(),
  project_name: text("project_name").notNull(),
  user_id: serial("user_id")
    .notNull()
    .references(() => users.user_id),
});

export const workingHours = pgTable("working_hours", {
  working_hour_id: serial("working_hour_id").primaryKey(),
  project_id: serial("project_id")
    .notNull()
    .references(() => projects.project_id),
  user_id: serial("user_id")
    .notNull()
    .references(() => users.user_id),
  date_time: date("date", { mode: "date" }),
  work_minutes: time("work_minutes"),
});

export const clerk_users = pgTable("clerk_users", {
  clerk_user_id: varchar("clerk_user_id", { length: 256 }),
  user_id: serial("user_id")
    .notNull()
    .references(() => users.user_id),
});
