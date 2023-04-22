import { NextRequest, NextResponse } from "next/server";

const url = "https://jsonplaceholder.typicode.com/todos";
const api_key: string = process.env.DATA_API_KEY2 as string;

export async function GET() {
  const res = await fetch(url);
  const data: Todo1[] = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const { userId, title }: Partial<Todo> = await request.json();
  if (!userId || !title)
    return NextResponse.json({ MESSAGE: "Missing data required" });
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": api_key,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });
  const newTodo: Todo1 = await res.json();

  return NextResponse.json(newTodo);
}

export async function DELETE(request: NextRequest) {
  const { id }: Partial<Todo> = await request.json();
  if (!id) return NextResponse.json({ MESSAGE: "Id required" });
  await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": api_key,
    },
  });
  return NextResponse.json({ MESSAGE: `${id} deleted from list` });
}
