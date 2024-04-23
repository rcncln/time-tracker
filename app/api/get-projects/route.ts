import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function getProjects() {
  try {
    const result = await sql`SELECT * from PROJECTS;`;
    console.log(result);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
 