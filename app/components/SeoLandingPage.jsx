import Link from "next/link";

function formatLabel(path) {
  return path
    .replace(/^\/blog\//, "")
    .replace(/^\//, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function SeoLandingPage({ page }) {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            {page.heroKicker || page.pageType}
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {page.heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {page.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Contact UMV Legal
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            {page.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-slate-950">
                  {section.title}
                </h2>
                <ul className="mt-5 space-y-3 text-slate-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
              <h2 className="text-2xl font-bold text-slate-950">
                Compliance Note
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                This page is for general legal information and keyword-mapped
                service discovery. It is not legal advice, does not create an
                advocate-client relationship, and should not be treated as a
                guarantee of any legal outcome.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-slate-950">
                Keyword Mapping
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-slate-900">
                    Primary keyword
                  </dt>
                  <dd className="mt-1 text-slate-600">
                    {page.primaryKeyword}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">
                    Search intent
                  </dt>
                  <dd className="mt-1 text-slate-600">{page.intent}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">
                Related Pages
              </h2>
              <div className="mt-4 space-y-2">
                {page.internalLinks.map((href) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-300 hover:bg-amber-50"
                  >
                    {formatLabel(href)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">
                Secondary Keywords
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {page.secondaryKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

