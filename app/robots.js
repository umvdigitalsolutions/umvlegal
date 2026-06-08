import { siteUrl } from "./seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/disclaimer"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
