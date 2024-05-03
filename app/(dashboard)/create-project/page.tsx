import React from "react";
import { ProjectCreation } from "@/components/component/create-project";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db/db";
import { clerk_users } from "@/db/schema/users";

export default async function Project() {
  const { userId }: { userId: string | null } = auth();

  const result = await db
    .select({ dbUserId: clerk_users.user_id })
    .from(clerk_users);

  return <ProjectCreation userId={result[0].dbUserId} />;
}
