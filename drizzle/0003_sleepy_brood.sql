ALTER TABLE "users" RENAME COLUMN "username" TO "last_name";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "first_name" text NOT NULL;