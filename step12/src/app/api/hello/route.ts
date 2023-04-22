import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";
import {
  Kysely,
  Generated,
  ColumnType,
  Selectable,
  Insertable,
  Updateable,
} from "kysely";

import { NeonDialect } from "kysely-neon";

interface students_table {
  id: number;
  name: string;
  age: number;
}
interface Database {
  students: students_table;
}
export async function GET(request: NextRequest) {
  const db = new Kysely<Database>({
    dialect: new NeonDialect({
      connectionString: process.env.NEON_DATABASE_URL!,
    }),
  });

  const result = await db.selectFrom("students").selectAll().execute();

  console.log("backend result", result);
  return new NextResponse(JSON.stringify(result));
}

// export async function GET(request: NextRequest) {
//   const conn = postgres({ ssl: require });
//   const result = await conn.unsafe("SELECT * FROM students");
//   console.log("backend result", result);
//   // return new NextResponse(JSON.stringify(result));
//   return NextResponse.json(result);
// }
// // function selectAll() {
// //   return conn.query("SELECT * FROM hello_world");
// // }
