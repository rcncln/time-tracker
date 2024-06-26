"use server";
import * as schema from "@/db/schema/users";
import { db } from "@/db/db";

export async function postProject({
  projectName,
  userId,
}: {
  projectName: any;
  userId: any;
}) {
  let result;

  try {
    result = await db
      .insert(schema.projects)
      .values({
        project_name: projectName,
        user_id: userId,
      })
      .returning();
  } catch (error) {
    console.log(error);
  }

  return result;
}
