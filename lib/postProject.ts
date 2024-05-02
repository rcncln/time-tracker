import * as schema from "@/db/schema/users";
import { db } from "@/db/db";

export async function postProject({
  projectName,
}: {
  projectName: string;
  userId: number;
}) {
  let result;

  try {
    result = await db
      .insert(schema.projects)
      .values({
        project_name: projectName,
      })
      .returning();
  } catch (error) {
    console.log(error);
  }

  return result;
}
