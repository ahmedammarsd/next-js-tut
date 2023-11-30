import { NextResponse } from "next/server";

// TEST FOR LOG IN
const isLogged = true;
export async function middleware(req, context) {
  //   console.log("no context", context);
  //   return NextResponse.next();

  // if (isLogged === false && req.url === "http://localhost:3000/news") {

  /// AFTER ADD CONFIG BOTTOM
  if (isLogged) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", req.url));
  //}
  //return NextResponse.next();
}

export const config = {
  matcher: ["/news/:path*"], // protect to access news and any root or path after news
};
