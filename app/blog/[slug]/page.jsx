import { notFound } from "next/navigation";
import SeoLandingPage from "../../components/SeoLandingPage";
import { getSeoPageByPath, seoPages } from "../../seo-page-data";
import { pageMetadata } from "../../seo";

export function generateStaticParams() {
  return seoPages
    .filter((page) => page.isBlog)
    .map((page) => ({
      slug: page.slug[1],
    }));
}

export function generateMetadata({ params }) {
  const page = getSeoPageByPath(`/blog/${params.slug}`);

  if (!page) {
    return {};
  }

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.url,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
  });
}

export default function SeoBlogPage({ params }) {
  const page = getSeoPageByPath(`/blog/${params.slug}`);

  if (!page || !page.isBlog) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}

