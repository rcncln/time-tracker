CREATE TABLE IF NOT EXISTS "login_sessions" (
	"session_id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"login_time" timestamp NOT NULL,
	"logout_time" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" varchar(255) NOT NULL,
	"email" varchar(255)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "login_sessions" ADD CONSTRAINT "login_sessions_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
