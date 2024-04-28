import { sql } from "@vercel/postgres";

/*
export default async function handler(req, res) {
  const { object, type } = req.body;

  if (type === "user.created") {
    try {
      const user = object;

      const result =
        await sql`INSERT INTO users ( email, first_name, last_name) VALUES 
        ( user.email_addresses[0].email_address, user.first_name, user.last_name)`;

      res.status(200).json({
        result,
        message: "User created successfully",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(200).json({ message: "Event not handled" });
  }
}

*/

import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json()
  console.log(payload)
  return Response.json({ message: 'Received' })
}

export async function GET() {
  return Response.json({ message: 'Hello World!' })
}