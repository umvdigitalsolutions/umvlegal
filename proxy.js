import { NextResponse } from "next/server";

const DISCLAIMER_COOKIE = "umv_disclaimer_accepted";
const SEARCH_BOT_PATTERN =
  /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot/i;

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const accepted = request.cookies.get(DISCLAIMER_COOKIE)?.value === "true";
  const userAgent = request.headers.get("user-agent") || "";
  const isSearchBot = SEARCH_BOT_PATTERN.test(userAgent);

  if (pathname === "/disclaimer" || accepted || isSearchBot) {
    return NextResponse.next();
  }

  const disclaimerUrl = request.nextUrl.clone();
  disclaimerUrl.pathname = "/disclaimer";
  disclaimerUrl.search = "";
  disclaimerUrl.searchParams.set("next", `${pathname}${request.nextUrl.search}`);

  return NextResponse.redirect(disclaimerUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
