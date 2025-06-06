import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return NextResponse.json(data);
}

// export async function POST() {
//   return NextResponse.json(data);
// }

// export async function PUT() {
//   return NextResponse.json(data);
// }

// export async function PATCH() {
//   return NextResponse.json(data);
// }

// export async function DELETE() {
//   return NextResponse.json(data);
// }
