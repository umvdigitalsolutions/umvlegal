import { siteUrl } from "./seo";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/team", "/ip-resources", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
