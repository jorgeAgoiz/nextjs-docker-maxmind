import { headers } from "next/headers";
import fs from "fs";
import path from "path";
import * as mmdb from "mmdb-lib";

const filePath: string = path.join(
  process.cwd(),
  process.env.MAXMIND_DB_PATH as string
);
const db = fs.readFileSync(filePath);

export async function GET() {
  const headersList = await headers();
  const ip = headersList.get("X-Forwarded-For");

  const reader = new mmdb.Reader<mmdb.CityResponse>(db);
  const geolocation = reader.get(ip as string);

  return Response.json({ geolocation }, { status: 200 });
}
