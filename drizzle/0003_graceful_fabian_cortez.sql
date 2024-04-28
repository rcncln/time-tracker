CREATE TABLE IF NOT EXISTS "clerk_users" (
	"clerk_user_id" varchar(256),
	"user_id" serial NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "clerk_users" ADD CONSTRAINT "clerk_users_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
