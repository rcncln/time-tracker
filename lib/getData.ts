import { db } from '@/db/db'
import { projects } from "@/db/schema/users";


export async function fetchProjects() {
    let rows;
    let errorMessage = null;
  
    try {
      const result = await db.select().from(projects)
      rows = result
    } catch (error: any) {
      errorMessage = "Error fetching data from database: " + error.message;
      console.error(errorMessage);
    }
  
    return { rows, errorMessage };
  }