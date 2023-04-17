import { NextRequest, NextResponse } from "next/server";

// type message = {
//   From: string;
//   Message: string;
//   RequestType: string;
// };

// export async function GET(request: NextRequest, { params: any }) {
//   return NextResponse.json({
//     From: params.name as anu,
//     Message: "Greetings from Pakistan",
//     RequestType: "GET",
//   });
// }

export async function GET(request: NextRequest) {
  // const { searchParams } = request.nextUrl;
  const url = request.nextUrl; //works same as above

  const obj = Object.fromEntries(url.searchParams.entries());
  return NextResponse.json(obj);
}
