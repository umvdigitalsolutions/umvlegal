"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const expertise = [
    "Trademark Search, Filing & Registration",
    "Trademark Opposition, Objections & Rectification",
    "Copyright Registration and Protection",
    "Design Registration",
    "Intellectual Property Litigation & Advisory",
    "Brand Protection & IP Portfolio Management",
    "International Trademark Filings (US, UK, EU & Australia)",
  ];

  const approach = [
    {
      title: "Strategic Thinking",
      description:
        "We approach every matter with both legal insight and business understanding, ensuring practical and result-oriented solutions.",
    },
    {
      title: "Client-Focused Service",
      description:
        "We believe in personalized attention, responsive support, and transparent communication at every stage.",
    },
    {
      title: "Global Perspective",
      description:
        "With international filing capabilities, we help businesses protect and expand their brands across multiple jurisdictions.",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Aditya Singh Shakya",
      designation: "Founder",
      image: "/adi.png",
      shortBio:
        "Founder of UMV Legal & Associates with strong experience in intellectual property rights and allied legal matters.",
      fullBio:
        "Aditya Singh Shakya is the Founder of UMV Legal & Associates. He has built the firm with a strong focus on intellectual property, brand protection, and practical legal strategy for businesses, startups, and entrepreneurs. His work includes trademark portfolio management, brand adoption, protection and enforcement, contracts, assignments, deeds, dispute resolution, and intellectual property-related commercial matters. He also has experience in trademark prosecution, trademark oppositions, copyright matters, searches, infringement support, clearance opinions, and advisory support across business and legal structuring.",
    },
    {
      id: 2,
      name: "Adv. Vikram Gulliya",
      designation: "Litigation Partner, Delhi",
      image: "/vik.png",
      shortBio:
        "Distinguished litigation professional with experience in civil, criminal, commercial, consumer, and arbitration matters.",
      fullBio:
        "Advocate Vikram Gulliya is a distinguished legal professional with extensive expertise in litigation, legal advisory, and dispute resolution. Based in Delhi, he represents clients across a broad spectrum of legal domains and has successfully handled complex cases in High Courts, District Courts, Consumer Forums, National Company Law Tribunal (NCLT), and Arbitral Tribunals. His areas of expertise include civil litigation, criminal defense, consumer dispute resolution, corporate and commercial disputes, alternative dispute resolution, matrimonial law, contract management, and RERA matters.",
    },
    {
      id: 3,
      name: "CA Ritu Gupta",
      designation: "Experienced Chartered Accountant & Financial Advisor",
      image: "/rituji.png",
      shortBio:
        "Seasoned Chartered Accountant providing finance, taxation, compliance, and business advisory services.",
      fullBio:
        "CA Ritu Gupta is a seasoned Chartered Accountant with extensive experience in finance, taxation, and business advisory services. She provides comprehensive financial solutions tailored to the needs of individuals and businesses across industries. Her core areas of expertise include income tax filing and planning, GST compliance and advisory, tax audits, business setup and entity structuring, financial planning and budgeting, corporate compliance, preparation and review of financial statements, internal and statutory audits, payroll and bookkeeping, investment planning, mergers and acquisitions advisory, and fund-raising strategies.",
    },
    {
      id: 4,
      name: "Anshika Bhardwaj",
      designation: "Patent Attorney",
      image: "/anshika.png",
      shortBio:
        "Patent attorney focused on intellectual property protection, patent prosecution, and innovation strategy.",
      fullBio:
        "Anshika Bhardwaj is a skilled Patent Attorney with extensive expertise in intellectual property protection, patent prosecution, and innovation strategy. Her practice focuses on safeguarding the intellectual assets of businesses, inventors, and research organizations through meticulous legal and technical analysis. She works across technology, pharmaceuticals, biotechnology, engineering, and related sectors. Her expertise includes patent drafting and filing, patent prosecution, prior art and freedom-to-operate searches, IP portfolio management, patent litigation support, technology licensing, and industrial designs.",
    },
    {
      id: 5,
      name: "Renu Sehgal",
      designation: "ICWA, GST Specialist",
      image: "/renu.png",
      shortBio:
        "ICWA professional focused on GST advisory, compliance, and business taxation support.",
      fullBio:
        "Renu Sehgal is an ICWA professional and GST Specialist associated with financial compliance and taxation support. She works on GST-related advisory, compliance processes, tax assistance, and practical business support for professionals and enterprises.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_35%)]" />
        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
                About Us
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                Protecting Innovation,
                <span className="block text-blue-700">
                  Brands & Creative Rights
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-justify text-lg leading-8 text-slate-600">
                UMV Legal & Associates is a modern intellectual property and
                business law firm committed to protecting innovation, creativity,
                and brand value in today’s competitive marketplace.
              </p>

              <p className="mt-4 max-w-2xl text-justify text-lg leading-8 text-slate-600">
                We help startups, entrepreneurs, and growing businesses secure,
                manage, and enforce their intellectual property rights with a
                practical and result-driven legal approach.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-500"
                >
                  Get Consultation
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-700"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-blue-200/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-2xl backdrop-blur-sm">
                <div className="relative h-[380px] w-full md:h-[480px]">
                  <Image
                    src="/hero.png"
                    alt="UMV Legal & Associates"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              A Modern IP & Business Law Firm
            </h2>

            <p className="mt-6 text-justify text-lg leading-8 text-slate-600">
              Established in <strong>2021</strong>, UMV Legal & Associates has
              built a strong reputation for providing strategic legal solutions
              in trademarks, copyrights, designs, and intellectual property
              litigation.
            </p>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              Founded by <strong>Aditya Singh Shakya</strong>, the firm combines
              strong legal expertise with a practical business-oriented approach,
              helping entrepreneurs, startups, and established businesses
              secure, manage, and enforce their intellectual property rights
              with confidence.
            </p>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              We believe that ideas, brands, and creative works are valuable
              business assets. Our role is to protect those assets through clear
              guidance, effective strategy, and reliable representation in both
              registration and enforcement matters.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Our Vision
            </span>

            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              A Trusted Legal Partner for Innovators & Businesses
            </h3>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              To become a trusted legal partner for innovators, entrepreneurs,
              and businesses, helping them protect their ideas, strengthen their
              brands, and grow confidently in the global marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Our Expertise
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Legal Services Built Around Brand Protection
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              We provide focused intellectual property and business law services
              designed to protect brands, creative works, and long-term
              commercial value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-base font-bold text-blue-700">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item}
                </h3>

                <p className="mt-4 text-justify leading-7 text-slate-600">
                  Professional support tailored to protect your intellectual
                  assets and strengthen your legal position.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Our Team
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Meet the Team Behind UMV Legal
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Click on any profile photo or card to view the complete profile.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="relative h-[360px] w-full overflow-hidden bg-slate-100">
                 <Image
  src={member.image}
  alt={member.name}
  fill
  className="object-contain transition duration-700 group-hover:scale-105"
/> <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                    {member.designation}
                  </p>

                  <p className="mt-4 text-justify leading-7 text-slate-600">
                    {member.shortBio}
                  </p>

                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:translate-x-1">
                    View Profile →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Our Approach
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Practical Legal Strategy with a Global Outlook
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Our practice is built on clarity, strategy, personalized service,
            and a strong understanding of both legal and commercial realities.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-justify leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/95 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl animate-modalUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-700 shadow-sm transition hover:scale-105 hover:bg-slate-100"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[380px] overflow-hidden bg-slate-100 md:h-full">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-contain animate-imageZoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>

              <div className="max-h-[80vh] overflow-y-auto p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  {selectedMember.designation}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  {selectedMember.name}
                </h3>

                <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

                <p className="mt-6 text-justify leading-8 text-slate-600">
                  {selectedMember.fullBio}
                </p>

                <button
                  onClick={() => setSelectedMember(null)}
                  className="mt-8 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-8 py-14 text-center shadow-2xl md:px-14">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Let’s Connect
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Protect Your Brand with Confidence
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Connect with UMV Legal & Associates for strategic legal support in
              trademarks, copyrights, designs, intellectual property
              enforcement, and international brand protection.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="rounded-full bg-white px-8 py-3 font-semibold text-slate-900 transition hover:bg-blue-50"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}