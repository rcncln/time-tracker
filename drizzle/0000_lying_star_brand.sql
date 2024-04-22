CREATE TABLE IF NOT EXISTS "login_sessions" (
	"session_id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"login_time" timestamp NOT NULL,
	"logout_time" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"project_id" serial PRIMARY KEY NOT NULL,
	"project_name" text NOT NULL,
	"user_id" serial NOT NULL,
	"date" date,
	"work_minutes" time
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"password" varchar(255) NOT NULL,
	"email" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "working_hours" (
	"working_hour_id" serial PRIMARY KEY NOT NULL,
	"project_id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"notes" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "login_sessions" ADD CONSTRAINT "login_sessions_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "working_hours" ADD CONSTRAINT "working_hours_project_id_projects_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("project_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "working_hours" ADD CONSTRAINT "working_hours_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
