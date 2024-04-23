import React from "react";
import { sql } from "@vercel/postgres";
import { TableDemo } from "@/components/component/users";

export default async function Users() {
  const { rows } = await sql`SELECT * from users`;
  return (
    <div>
      <TableDemo rows={rows}/>
    </div>
  );
}
