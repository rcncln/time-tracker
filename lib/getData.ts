import { sql } from "@vercel/postgres";

export async function fetchProjects() {
    let rows;
    let errorMessage = null;
  
    try {
      const result = await sql`SELECT * FROM projects`;
      rows = result.rows;
    } catch (error: any) {
      errorMessage = "Error fetching data from database: " + error.message;
      console.error(errorMessage);
    }
  
    return { rows, errorMessage };
  }