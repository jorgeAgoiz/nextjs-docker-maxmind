import fs from "fs";
import path from "path";
import * as mmdb from "mmdb-lib";
import { headers } from "next/headers";

const filePath: string = path.join(
  process.cwd(),
  "maxmind",
  "dev-db",
  "GeoLite2-City.mmdb"
);
const db = fs.readFileSync(filePath);

export async function GET() {
  const headersList = await headers();
  const ip = headersList.get("X-Forwarded-For");

  const reader = new mmdb.Reader<mmdb.CityResponse>(db);
  const geolocation = reader.get(ip as string);

  return Response.json({ message: "Hello, Next.js!", geolocation });
}
