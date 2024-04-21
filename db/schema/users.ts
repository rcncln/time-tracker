import { index, pgTable, serial, bigint, varchar, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
 id: serial("id").primaryKey(),
 fullName: text("fullname"),

});

