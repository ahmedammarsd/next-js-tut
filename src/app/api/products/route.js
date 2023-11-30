import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    products: [
      {
        name: "shoes",
        size: 45,
        color: "black",
      },
      {
        name: "shoes",
        size: 45,
        color: "black",
      },
      {
        name: "shoes",
        size: 45,
        color: "black",
      },
      {
        name: "shoes",
        size: 45,
        color: "black",
      },
    ],
  });
}
