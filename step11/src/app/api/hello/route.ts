import { NextRequest, NextResponse } from "next/server";

// step00 Hello
export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has("name")) {
    const name = url.searchParams.get("name");
    return new NextResponse("Hello from " + name);
  }
  return new NextResponse("Please tell me your name");
}
