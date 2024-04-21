import { Pool } from "pg";
require("dotenv").config({ path: ".env.development.local" });
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const db = drizzle(pool);

async function main() {
  console.log("migration started.");
  await migrate(db, {
    migrationsFolder: "drizzle",
  });
  console.log("migration completed.");
}

main().catch((err) => {
  console.log(err);
});
