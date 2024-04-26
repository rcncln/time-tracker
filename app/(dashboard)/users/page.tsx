"use server";
import React, { Suspense } from "react";
import { sql } from "@vercel/postgres";
import { TableDemo } from "@/components/component/users";
import { QueryResultRow } from "pg";
import Loading from "./loading";
import { getUsers } from "@/lib/getUsers";

export default async function Users() {
  let users;

  try {
    users = await getUsers();
  } catch (error) {}

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TableDemo users={users} />
      </Suspense>
    </div>
  );
}
