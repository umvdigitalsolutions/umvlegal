import Hero from "./components/Hero";
import Link from "next/link";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "IP Law Firm in Jodhpur | Trademark, Copyright & Legal Services",
  description:
    "UMV Legal & Associates provides information on trademark, copyright, patent, design, corporate, property and litigation-related legal services in Jodhpur, Rajasthan and India.",
  path: "/",
  keywords: [
    "IP law firm in Jodhpur",
    "trademark lawyer in Jodhpur",
    "copyright lawyer in Jodhpur",
    "patent lawyer in Jodhpur",
    "law firm in Jodhpur",
    "legal services in Rajasthan",
    "trademark registration in Jodhpur",
    "trademark objection reply",
    "trademark opposition in India",
    "corporate lawyer in Jodhpur",
    "property lawyer in Jodhpur",
  ],
});

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Legal Support Built on Trust and Precision
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We provide structured legal solutions designed to protect your
            rights, reduce risk, and guide you with confidence.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Strategic Advice
              </h3>
              <p className="mt-4 text-slate-600 leading-7">
                We focus on practical legal strategy, not just technical answers.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Clear Communication
              </h3>
              <p className="mt-4 text-slate-600 leading-7">
                We explain matters simply so clients can make informed decisions.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Professional Execution
              </h3>
              <p className="mt-4 text-slate-600 leading-7">
                From documentation to representation, we work with care and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Mumbai
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Trademark & Copyright Support in Mumbai
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Our Mumbai branch supports businesses, founders, creators, and
              brand owners with trademark searches, filing, copyright matters,
              IP prosecution coordination, and practical brand protection
              advisory.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Rajasthan
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Legal Services in Rajasthan & Jodhpur
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              From Jodhpur, Rajasthan, UMV Legal & Associates assists clients
              with intellectual property, civil litigation, criminal defense,
              property matters, corporate documentation, taxation coordination,
              and business legal advisory.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                IP Resources
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Start Your Trademark & Copyright Preparation
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Use our trademark class finder, WhatsApp inquiry buttons, and
                downloadable IP checklists before filing or consultation.
              </p>
            </div>

            <Link
              href="/ip-resources"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Open Resources
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Trademark Class Finder",
              "WhatsApp Inquiry Buttons",
              "Free IP Checklists",
            ].map((tool) => (
              <div
                key={tool}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">{tool}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  A practical tool for brand owners, startups, creators, and
                  businesses preparing IP protection steps.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                Practice Areas
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Our Legal Services
              </h2>
            </div>

            <Link
              href="/services"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View All Services
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Intellectual Property Law",
              "Corporate & Commercial Law",
              "Civil Litigation",
              "Family & Matrimonial Law",
              "Criminal Defense",
              "Property & Real Estate Law",
            ].map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900">{service}</h3>
                <p className="mt-4 text-slate-600 leading-7">
                  Professional legal guidance tailored to your matter with strong attention to detail and practical outcomes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
