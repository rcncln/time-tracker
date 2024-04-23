ALTER TABLE "working_hours" ADD COLUMN "work_minutes" time;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN IF EXISTS "date";--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN IF EXISTS "work_minutes";--> statement-breakpoint
ALTER TABLE "working_hours" DROP COLUMN IF EXISTS "notes";