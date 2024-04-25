"use server";
import React, { Suspense } from "react";
import { sql } from "@vercel/postgres";
import { TableDemo } from "@/components/component/users";
import { QueryResultRow } from "pg";
import Loading from "./loading";

export default async function Users() {
  let users: QueryResultRow[] = [];
  let errorMessage = null;

  try {
    const result = await sql`SELECT first_name, last_name, email from users`;
    users = result.rows;
    console.log(users);
  } catch (error: any) {
    errorMessage = "Error fetching data from database: " + error.message;
    console.error(errorMessage);
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TableDemo users={users} />
      </Suspense>
    </div>
  );
}
