import * as schema from "@/db/schema/users";
import { db } from "@/db/db";

export async function getUsers() {
  let result;

  try {
    result = await db
      .select({
        firstName: schema.users.first_name,
        lastName: schema.users.last_name,
        email: schema.users.email,
      })
      .from(schema.users);
  } catch (error) {
    console.log(error);
  }

  return result;
}
