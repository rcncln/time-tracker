import { sql } from "@vercel/postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
 return NextResponse.json({ message: "Hello from Next.js!" }, {status: 200});
}
