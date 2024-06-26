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



import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(request: Request) {
  console.log(request)
  return Response.json({ message: 'Received' })
}

export async function GET() {
  return Response.json({ message: 'Hello World!' })
}

*/

import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/db/db";
import { clerk_users, users } from "@/db/schema/users";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  try {
    await db.insert(users).values({
      first_name: payload.data.first_name,
      last_name: payload.data.last_name,
      email: payload.data.email_addresses[0].email_address,
      password: "123test",
    });

    const result = await db.select({
      userId: users.user_id,

    }).from(users).where(eq(users.email, payload.data.email_addresses[0].email_address))

    const {userId} = result[0]

    await db.insert(clerk_users).values({
      clerk_user_id: payload.data.id,
      user_id: userId
    })

  } catch (error) {
    return new Response("database insert error");
  }

  return new Response("Success", { status: 200 });
}

export async function GET() {
  return Response.json({ message: "Hello World!" });
}
