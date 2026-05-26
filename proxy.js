import { NextResponse } from "next/server";

const DISCLAIMER_COOKIE = "umv_disclaimer_accepted";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const accepted = request.cookies.get(DISCLAIMER_COOKIE)?.value === "true";

  if (pathname === "/disclaimer" || accepted) {
    return NextResponse.next();
  }

  const disclaimerUrl = request.nextUrl.clone();
  disclaimerUrl.pathname = "/disclaimer";
  disclaimerUrl.search = "";

  return NextResponse.redirect(disclaimerUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
