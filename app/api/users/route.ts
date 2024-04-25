import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(
    request: Request
  ) {
    const { searchParams } = new URL(request.url);
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');
    const email = searchParams.get('email');
  
  
    try {
      const result = await sql`INSERT INTO users (first_name, last_name, email, password) VALUES (${firstName}, ${lastName}, ${email}, 'pas1234');`;
      return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
      return NextResponse.json(error);
    }
  }