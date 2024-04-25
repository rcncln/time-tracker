import { sql } from "@vercel/postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};


export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { projectName, userId } = req.body;

  try {
    await sql`INSERT INTO projects (project_name, user_id) VALUES (${projectName}, ${userId});`;
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const result = await sql`SELECT * from projects;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
