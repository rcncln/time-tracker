import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function getProjects() {
  try {
    const data = await sql`SELECT * from PROJECTS;`;
    console.log(data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
 