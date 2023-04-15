import { NextResponse, NextRequest } from "next/server";

// step01
export async function GET(request: NextRequest) {
  return NextResponse.json({
    name: "Sarim",
    message: "Please get out of my API request",
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Zia",
      Message: "All well here",
      RequestType: "POST",
    });
  } else {
    return new NextResponse("Please include your name in the POST request");
  }
}
