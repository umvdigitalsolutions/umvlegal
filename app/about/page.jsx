import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "About UMV Legal - IP Law Firm in Mumbai and Rajasthan",
  description:
    "Learn about UMV Legal & Associates, a modern law firm focused on intellectual property, trademark, copyright, business law, and legal advisory services in Mumbai and Rajasthan.",
  path: "/about",
  keywords: [
    "about UMV Legal",
    "IP law firm Mumbai",
    "IP law firm Rajasthan",
    "trademark law firm Jodhpur",
  ],
});

export default function AboutPage() {
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
                  href="/contact"
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
                href="/contact"
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
