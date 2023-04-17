import { NextRequest, NextResponse } from "next/server";

const Books = [
  {
    id: 1,
    name: "Glory to me",
    type: "nerds",
  },
  {
    id: 2,
    name: "Harry Puttar",
    type: "otaku",
  },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(Books);
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  if (res.name) {
    return NextResponse.json({
      To: "Zia",
      message: "All well",
      RequestType: "POST",
    });
  }
  return NextResponse.json({ message: "Please provide your name" });
}
