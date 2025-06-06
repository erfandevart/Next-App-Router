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

export async function POST(req) {
  const body = await req.json();
  console.log(body);

  const fiteredData = data.filter((item) => item.name === body.data.name);
  console.log(fiteredData);

  return NextResponse.json(`Hi, you are ${fiteredData[0].name}`);
}
