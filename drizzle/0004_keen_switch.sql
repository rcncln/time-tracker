CREATE TABLE IF NOT EXISTS "projects" (
	"project_id" serial PRIMARY KEY NOT NULL,
	"project_name" text NOT NULL,
	"user_id" serial NOT NULL,
	"date" date
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
