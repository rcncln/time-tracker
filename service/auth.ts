"use server";
import { db } from "@/db/db";
import { clerk_users } from "@/db/schema/users";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

class Auth {
  async getUserId() {
    const { userId }: { userId: string | null } = auth();

    try {
      const result = await db
        .select({ dbUserId: clerk_users.user_id })
        .from(clerk_users).where(eq(userId, clerk_users.user_id));
      return result;
    } catch (error) {
      console.error("Error fetching user ID:", error);
      return null;
    }
  }
}

export default new Auth();
