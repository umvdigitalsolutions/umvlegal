"use client";

import { useMemo, useState } from "react";

const trademarkClasses = [
  {
    classNumber: "1",
    title: "Chemicals",
    keywords: ["chemicals", "fertilizer", "adhesive", "industrial chemical"],
    examples: "Chemicals for industry, science, agriculture, adhesives.",
  },
  {
    classNumber: "3",
    title: "Cosmetics & Cleaning",
    keywords: ["cosmetic", "soap", "perfume", "skincare", "cleaning"],
    examples: "Cosmetics, soaps, perfumes, hair oils, cleaning preparations.",
  },
  {
    classNumber: "5",
    title: "Pharmaceuticals",
    keywords: ["medicine", "pharma", "supplement", "sanitary", "ayurvedic"],
    examples: "Medicines, health supplements, sanitary preparations.",
  },
  {
    classNumber: "9",
    title: "Software & Electronics",
    keywords: ["software", "app", "electronics", "computer", "mobile"],
    examples: "Software, mobile apps, electronics, downloadable media.",
  },
  {
    classNumber: "16",
    title: "Paper & Printed Matter",
    keywords: ["book", "paper", "stationery", "printed", "packaging"],
    examples: "Books, stationery, printed publications, paper goods.",
  },
  {
    classNumber: "25",
    title: "Clothing & Footwear",
    keywords: ["clothing", "fashion", "footwear", "apparel", "garment"],
    examples: "Clothing, footwear, headgear, fashion apparel.",
  },
  {
    classNumber: "29",
    title: "Processed Foods",
    keywords: ["food", "snack", "dairy", "meat", "pickle"],
    examples: "Processed foods, dairy products, edible oils, snacks.",
  },
  {
    classNumber: "30",
    title: "Staple Foods",
    keywords: ["tea", "coffee", "rice", "flour", "spices", "bakery"],
    examples: "Tea, coffee, flour, rice, spices, bakery products.",
  },
  {
    classNumber: "35",
    title: "Business & Retail Services",
    keywords: ["retail", "business", "advertising", "marketing", "ecommerce"],
    examples: "Retail, wholesale, advertising, business management, ecommerce.",
  },
  {
    classNumber: "36",
    title: "Finance & Real Estate",
    keywords: ["finance", "insurance", "real estate", "property", "banking"],
    examples: "Financial services, insurance, real estate affairs.",
  },
  {
    classNumber: "41",
    title: "Education & Entertainment",
    keywords: ["education", "training", "entertainment", "sports", "coaching"],
    examples: "Education, coaching, entertainment, events, sports activities.",
  },
  {
    classNumber: "42",
    title: "Technology & SaaS",
    keywords: ["technology", "saas", "website", "design", "development"],
    examples: "Technology services, SaaS, software development, web design.",
  },
  {
    classNumber: "43",
    title: "Hotels & Restaurants",
    keywords: ["restaurant", "hotel", "cafe", "food service", "catering"],
    examples: "Restaurants, cafes, hotels, catering, temporary accommodation.",
  },
  {
    classNumber: "44",
    title: "Medical & Beauty Services",
    keywords: ["clinic", "medical", "beauty", "salon", "healthcare"],
    examples: "Medical services, clinics, beauty care, salons, wellness.",
  },
  {
    classNumber: "45",
    title: "Legal & Security Services",
    keywords: ["legal", "law", "security", "personal", "compliance"],
    examples: "Legal services, security services, personal and social services.",
  },
];

const checklists = [
  {
    title: "Trademark Filing Checklist",
    description:
      "Documents and details to prepare before filing a trademark application.",
    href: "/checklists/trademark-filing-checklist.txt",
  },
  {
    title: "Copyright Protection Checklist",
    description:
      "A practical checklist for creators, founders, and businesses protecting original works.",
    href: "/checklists/copyright-protection-checklist.txt",
  },
  {
    title: "Brand Protection Checklist",
    description:
      "A starter checklist for choosing, clearing, filing, and monitoring a brand.",
    href: "/checklists/brand-protection-checklist.txt",
  },
];

const preparationNotes = [
  {
    title: "Identify the correct class",
    text: "Start with the closest goods or services category, then check whether related classes are needed for the same brand.",
  },
  {
    title: "Prepare applicant details",
    text: "Keep the applicant name, entity type, address, brand ownership details, and supporting authorization documents ready.",
  },
  {
    title: "Check distinctiveness",
    text: "Avoid generic, descriptive, or commonly used words where possible. Stronger marks are easier to protect and enforce.",
  },
  {
    title: "Review conflicts",
    text: "A class match is only the first step. Similar existing marks, phonetic similarity, and market use should be reviewed before filing.",
  },
];

export default function IPResourcesClient() {
  const [query, setQuery] = useState("");

  const classResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return trademarkClasses.slice(0, 6);
    }

    return trademarkClasses.filter((item) => {
      const searchableText = [
        item.classNumber,
        item.title,
        item.examples,
        ...item.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            IP Resources
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Trademark Class Finder & IP Filing Checklists
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Use these preparation resources to understand trademark classes,
            organize filing details, and review brand protection basics before
            taking the next legal step.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                Resource 1
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Trademark Class Finder
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Search by product or service keyword to find commonly relevant
                trademark classes. This is a starting point only; final class
                selection should be reviewed before filing.
              </p>
              <div className="mt-8">
                <label
                  htmlFor="class-search"
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700"
                >
                  Search product or service
                </label>
                <input
                  id="class-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Example: clothing, software, restaurant"
                  className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {classResults.length > 0 ? (
                classResults.map((item) => (
                  <div
                    key={item.classNumber}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                          Class {item.classNumber}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                        Indicative class
                      </div>
                    </div>
                    <p className="mt-4 leading-7 text-slate-600">
                      {item.examples}
                    </p>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900">
                    No direct match found
                  </h3>
                  <p className="mt-3 text-slate-600">
                    Try a broader word such as software, clothing, food,
                    finance, education, legal, or restaurant.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Resource 2
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Filing Preparation Guides
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Download simple checklists to organize trademark, copyright, and
              brand protection information before filing or professional review.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {checklists.map((checklist) => (
              <div
                key={checklist.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {checklist.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {checklist.description}
                </p>
                <a
                  href={checklist.href}
                  download
                  className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Download Checklist
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Resource 3
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Before You File
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A few practical points help avoid avoidable objections, class
              errors, and weak filing strategy.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {preparationNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {note.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
