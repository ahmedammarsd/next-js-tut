import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    test: "Welcome from Next JS",
  });
}

/// context for get the params that in link api  https..../api/products/12
