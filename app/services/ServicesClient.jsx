"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    id: "ip-law",
    title: "Intellectual Property Law",
    image: "/ipr.png",
    shortDescription:
      "Trademark, copyright, design, brand protection, opposition matters, and IP advisory for businesses and creators.",
    heroDescription:
      "We help businesses secure, enforce, and commercialize their intellectual property through structured legal strategy and practical execution.",
    details: [
      "Trademark search, filing, objection reply, hearing, opposition, rectification, and cancellation matters.",
      "Copyright registration and advisory for artistic, literary, digital, and creative works.",
      "Design registration and strategy for product appearance, packaging, and visual identity.",
      "Brand protection advice for startups, established businesses, and cross-border expansion.",
      "IP portfolio management to build long-term brand value.",
    ],
    deliverables: [
      "Trademark filing strategy",
      "Examination report responses",
      "Opposition / counter statement drafting",
      "Rectification petitions",
      "Copyright and design filings",
      "Brand enforcement advisory",
    ],
    judgments: [
      {
        title:
          "Nandhini Deluxe v. Karnataka Cooperative Milk Producers Federation Ltd.",
        citation: "Supreme Court of India",
        summary:
          "This case is important in trademark law because the Supreme Court clarified that registration in the same class does not automatically create monopoly over all goods in that class.",
      },
      {
        title: "Cadila Healthcare Ltd. v. Cadila Pharmaceuticals Ltd.",
        citation: "Supreme Court of India",
        summary:
          "A landmark case on deceptive similarity and consumer confusion, especially in medicinal products.",
      },
    ],
  },
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Law",
    image: "/corporate.png",
    shortDescription:
      "Business structuring, contracts, commercial strategy, legal risk management, and advisory for companies and entrepreneurs.",
    heroDescription:
      "We support businesses with practical commercial documentation and legal structuring that protects growth, transactions, and long-term decision-making.",
    details: [
      "Drafting and reviewing commercial agreements, founders’ agreements, NDAs, service contracts, and business documentation.",
      "Advisory on legal structuring, compliance approach, and risk-sensitive decision making.",
      "Support for companies, startups, and growing businesses in commercial transactions.",
    ],
    deliverables: [
      "Commercial contracts",
      "Founder / shareholder documents",
      "Vendor and service agreements",
      "NDA and confidentiality documentation",
      "Business risk advisory",
    ],
    judgments: [
      {
        title: "Salomon v. Salomon & Co. Ltd.",
        citation: "House of Lords",
        summary:
          "This classic company law decision established the principle of separate legal personality.",
      },
    ],
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    image: "/civil.png",
    shortDescription:
      "Representation in civil disputes involving contracts, injunctions, recovery, business conflicts, and procedural strategy.",
    heroDescription:
      "Our civil litigation approach is built around precise pleadings, practical procedural strategy, and result-oriented representation.",
    details: [
      "Drafting plaints, written statements, injunction applications, replies, and supporting legal submissions.",
      "Dispute strategy in contractual, commercial, and civil recovery matters.",
      "Interim relief work including urgent injunction and status quo protection.",
    ],
    deliverables: [
      "Plaints and written statements",
      "Injunction applications",
      "Replies and rejoinders",
      "Case strategy notes",
    ],
    judgments: [
      {
        title: "Salem Advocate Bar Association v. Union of India",
        citation: "Supreme Court of India",
        summary:
          "A leading authority on the Code of Civil Procedure and procedural reform.",
      },
    ],
  },
  {
    id: "family-matrimonial",
    title: "Family & Matrimonial Law",
    image: "/family.png",
    shortDescription:
      "Sensitive legal support in matrimonial disputes, divorce, maintenance, custody, and related family matters.",
    heroDescription:
      "We handle family disputes with discretion, empathy, and legal clarity.",
    details: [
      "Divorce matters including contested and mutual consent proceedings.",
      "Maintenance, alimony, domestic dispute advisory, and related proceedings.",
      "Child custody and visitation strategy.",
    ],
    deliverables: [
      "Divorce petitions and replies",
      "Maintenance applications",
      "Custody-related drafting",
      "Court representation",
    ],
    judgments: [
      {
        title: "Shayara Bano v. Union of India",
        citation: "Supreme Court of India",
        summary:
          "A landmark constitutional and matrimonial law judgment associated with instant triple talaq.",
      },
    ],
  },
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    image: "/criminal.png",
    shortDescription:
      "Strategic criminal defense, bail matters, procedural protection, and representation across investigation and trial stages.",
    heroDescription:
      "We provide careful criminal defense support with strong attention to procedural safeguards and rights protection.",
    details: [
      "Bail and anticipatory bail matters.",
      "Criminal complaints, responses, and defense strategy.",
      "Protection of rights during investigation and custodial processes.",
    ],
    deliverables: [
      "Bail applications",
      "Anticipatory bail drafting",
      "Defense strategy notes",
      "Trial support",
    ],
    judgments: [
      {
        title: "D.K. Basu v. State of West Bengal",
        citation: "Supreme Court of India",
        summary:
          "A leading judgment on custodial safeguards, arrest procedures, and protection against abuse in detention.",
      },
    ],
  },
  {
    id: "property-real-estate",
    title: "Property & Real Estate Law",
    image: "/prop.png",
    shortDescription:
      "Legal assistance in title issues, documentation, transfer disputes, real estate transactions, and property conflict resolution.",
    heroDescription:
      "We assist in property matters with careful document review and practical dispute strategy.",
    details: [
      "Property documentation review, title evaluation, and transfer-related advisory.",
      "Support in disputes involving ownership, possession, sale agreements, and real estate transactions.",
      "Legal strategy for property conflicts and documentation-based litigation.",
    ],
    deliverables: [
      "Title review support",
      "Sale / transfer documentation review",
      "Property dispute drafting",
      "Real estate risk assessment",
    ],
    judgments: [
      {
        title: "Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana",
        citation: "Supreme Court of India",
        summary:
          "A landmark property law judgment clarifying that SA/GPA/WILL transactions do not by themselves convey legal title.",
      },
    ],
  },
  {
    id: "international-filing",
    title: "International Filing",
    image: "/inter.png",
    shortDescription:
      "Cross-border trademark filing and brand protection strategy for businesses expanding beyond India.",
    heroDescription:
      "We assist businesses in protecting brands internationally with filing support and jurisdiction planning.",
    details: [
      "International trademark filing support in the US, UK, Australia, and the European Union.",
      "Pre-filing strategy based on jurisdiction, goods/services, and long-term brand expansion.",
      "Assistance in aligning Indian filings with overseas brand protection plans.",
    ],
    deliverables: [
      "Filing roadmap",
      "Jurisdiction planning",
      "International brand protection advisory",
      "Cross-border filing coordination",
    ],
    judgments: [
      {
        title: "Toyota Jidosha Kabushiki Kaisha v. Prius Auto Industries Ltd.",
        citation: "Supreme Court of India",
        summary:
          "A key judgment on trans-border reputation in trademark law.",
      },
    ],
  },
];

function Modal({ onClose, children, wide = false }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className={`relative max-h-[90vh] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl ${
          wide ? "max-w-6xl" : "max-w-4xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            UMV Legal & Associates
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Close
          </button>
        </div>

        <div className="max-h-[calc(90vh-72px)] overflow-y-auto p-6 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)]"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/35 to-transparent" />
        <div className="absolute inset-0 bg-blue-900/0 transition duration-500 group-hover:bg-blue-900/10" />

        <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Service Area
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="max-w-[85%] text-2xl font-bold leading-tight text-white drop-shadow-sm">
            {service.title}
          </h3>
          <div className="mt-3 h-1 w-16 rounded-full bg-blue-400 transition-all duration-500 group-hover:w-24" />
        </div>
      </div>

      <div className="relative p-8">
        <p className="leading-7 text-slate-600">{service.shortDescription}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="inline-flex items-center text-sm font-semibold text-slate-900 transition group-hover:text-blue-700">
            Explore Details
            <span className="ml-2 transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 transition group-hover:bg-blue-50 group-hover:text-blue-700">
            {service.judgments.length} Judgements
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/0 to-transparent transition duration-500 group-hover:via-blue-400/70" />
    </button>
  );
}

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedJudgment, setSelectedJudgment] = useState(null);

  const activeService = useMemo(
    () => servicesData.find((item) => item.id === selectedServiceId),
    [selectedServiceId]
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Practice Areas
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Legal Services Built on Strategy, Precision, and Trust
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore our core service areas including Intellectual Property,
            Corporate & Commercial Law, Civil Litigation, Family & Matrimonial
            Law, Criminal Defense, Property & Real Estate Law, and
            International Filing support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-100"
            >
              Consult With Us
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.04),transparent_20%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Comprehensive Legal Support
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Click any service card to open a detailed overview, scope of work,
            deliverables, and landmark judgements with full summaries.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => {
                  setSelectedServiceId(service.id);
                  setSelectedJudgment(null);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Strategic Advice
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                We focus on practical legal strategy, not just technical legal
                answers.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Clear Communication
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                We explain legal matters in a simple and structured way so
                clients can act with confidence.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Professional Execution
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                From drafting to representation, we work with care, precision,
                and strong legal discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {activeService && (
        <Modal
          wide
          onClose={() => {
            setSelectedServiceId(null);
            setSelectedJudgment(null);
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="relative mb-8 h-[320px] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

                <div className="absolute left-6 top-6 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  Practice Area
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white md:text-4xl">
                    {activeService.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">
                    Strategic legal support tailored to protect rights, reduce
                    risk, and deliver practical outcomes.
                  </p>
                </div>
              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                {activeService.title}
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Detailed Service Overview
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {activeService.heroDescription}
              </p>

              <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Scope of Services
                </h3>

                <ul className="mt-6 space-y-4">
                  {activeService.details.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-600">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-700" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Key Deliverables
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {activeService.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold">Landmark Judgements</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Click any judgement below to open the complete summary in a
                  separate popup.
                </p>

                <div className="mt-6 space-y-4">
                  {activeService.judgments.map((judgment, index) => (
                    <button
                      key={judgment.title}
                      onClick={() => setSelectedJudgment(judgment)}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                            Landmark {index + 1}
                          </p>
                          <h4 className="mt-2 text-base font-semibold leading-6 text-white">
                            {judgment.title}
                          </h4>
                          <p className="mt-2 text-sm text-slate-300">
                            {judgment.citation}
                          </p>
                        </div>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                          View
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <h4 className="text-lg font-bold text-slate-900">
                  Why this matters
                </h4>
                <p className="mt-3 leading-7 text-slate-600">
                  Strong legal work is not only about drafting. It is about
                  understanding rights, identifying risk, applying the right
                  precedent, and building the correct strategy for the client’s
                  objective.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {selectedJudgment && (
        <Modal onClose={() => setSelectedJudgment(null)}>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Landmark Judgement
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {selectedJudgment.title}
          </h2>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {selectedJudgment.citation}
          </p>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-lg leading-8 text-slate-700">
              {selectedJudgment.summary}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}