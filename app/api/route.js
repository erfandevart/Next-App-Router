import { NextResponse } from "next/server";

const data = [
  { name: "erfan", lastName: "mohiti" },
  { name: "vahid", lastName: "mohiti" },
];

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  console.log(name);
  const fiteredData = data.filter((item) => item.name === name);
  return NextResponse.json(fiteredData);
}
