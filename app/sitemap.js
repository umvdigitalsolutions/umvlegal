import { siteUrl } from "./seo";
import { seoPages } from "./seo-page-data";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/team",
    "/ip-resources",
    "/contact",
    ...seoPages.map((page) => page.url),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.7 : 0.8,
  }));
}
