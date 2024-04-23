import React from "react";
import { TimeLogging } from "@/components/component/time-logging";
import { sql } from "@vercel/postgres";

export default async function Timelog() {
    const { rows } = await sql`SELECT * from projects`;

    return(
        <TimeLogging rows={rows} />
    )
}