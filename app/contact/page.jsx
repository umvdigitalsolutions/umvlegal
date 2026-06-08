import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Contact UMV Legal in Mumbai and Rajasthan",
  description:
    "Contact UMV Legal & Associates for trademark, copyright, intellectual property, corporate, civil, criminal, property, and legal advisory services in Mumbai, Rajasthan, and Jodhpur.",
  path: "/contact",
  keywords: [
    "contact lawyer Mumbai",
    "contact lawyer Rajasthan",
    "trademark consultation Mumbai",
    "legal consultation Jodhpur",
    "UMV Legal contact",
  ],
});

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.29a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="m22 8-8.97 5.7a2 2 0 0 1-2.06 0L2 8" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const contactCards = [
  {
    title: "Call Us",
    value: "+91 9967276861 / 7357000507",
    sub: "Monday to Saturday | 10:00 AM - 7:00 PM",
    href: "tel:9967276861",
    icon: <PhoneIcon />,
  },
  {
    title: "Email Us",
    value: "umvlegalassociates@gmail.com",
    sub: "Share your legal query anytime",
    href: "mailto:umvlegalassociates@gmail.com",
    icon: <MailIcon />,
  },
  {
    title: "Office Location",
    value: "Mumbai & Rajasthan, India",
    sub: "Jodhpur office and Mumbai branch support by appointment",
    href: "#location",
    icon: <MapPinIcon />,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-white">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[-90px] top-[-90px] h-72 w-72 rounded-full bg-yellow-500 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-60px] h-96 w-96 rounded-full bg-amber-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-12">

          {/* TEXT */}
          <div>

            <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
              Contact UMV Legal & Associates
            </span>

            <h1 className="mt-6 text-4xl font-bold md:text-5xl">
              Let’s Discuss Your Legal Requirements
            </h1>

            <p className="mt-6 max-w-xl text-neutral-300">
              Whether you need support with trademarks, copyrights,
              commercial agreements, litigation, or legal advisory,
              our team in Mumbai and Rajasthan is here to guide you with
              clarity and professionalism.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="tel:9967276861"
                className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
              >
                Call Now
              </Link>

              <Link
                href="mailto:umvlegalassociates@gmail.com"
                className="rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black"
              >
                Email Us
              </Link>

            </div>

          </div>

          {/* LOGO BOX */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">

            <div className="relative inline-flex flex-col items-center gap-3 rounded-[32px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">

              <Image
                src="/umv1.png"
                alt="UMV Legal Logo"
                width={260}
                height={263}
                className="block h-auto w-[210px] object-contain sm:w-[250px]"
                priority
              />

              <Link
                href="https://www.instagram.com/umvlegal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with UMV Legal on Instagram"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-neutral-950/70 px-3 py-2 text-white shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-neutral-950/85 focus:outline-none focus:ring-2 focus:ring-white/80"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 shadow-md transition group-hover:scale-105">
                  <InstagramIcon />
                </span>
                <span className="whitespace-nowrap text-xs font-semibold leading-none">
                  @umvlegal
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-3">

          {contactCards.map((item, index) => (

            <Link
              key={index}
              href={item.href}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-yellow-400">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

              <p className="mt-2 font-medium">{item.value}</p>

              <p className="text-sm text-neutral-500">{item.sub}</p>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Connect
                <ArrowRightIcon />
              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:grid lg:grid-cols-2 lg:gap-10">

        <div className="rounded-3xl border bg-neutral-50 p-8">

          <h2 className="text-3xl font-bold">Get in Touch</h2>

          <p className="mt-4 text-neutral-600">
            At UMV Legal & Associates we provide professional legal support
            in intellectual property, corporate advisory, and dispute
            resolution matters.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex gap-3">
              <PhoneIcon />
              <span>+91 9967276861 / 7357000507</span>
            </div>

            <div className="flex gap-3">
              <MailIcon />
              <span>umvlegalassociates@gmail.com</span>
            </div>

            <div className="flex gap-3">
              <MapPinIcon />
              <span>Mumbai & Rajasthan, India</span>
            </div>

            <div className="flex gap-3">
              <ClockIcon />
              <span>Mon – Sat | 10 AM – 7 PM</span>
            </div>

          </div>

        </div>

        {/* FORM */}
        <div className="rounded-3xl border bg-white p-8 shadow-sm mt-10 lg:mt-0">

          <h2 className="text-2xl font-bold">Send Inquiry</h2>

          <ContactForm />

        </div>

      </section>

      <section id="location" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-neutral-50 p-8">
            <h2 className="text-2xl font-bold">Mumbai Branch</h2>
            <p className="mt-4 text-neutral-600">
              Trademark and copyright assistance for businesses, creators,
              startups, and brand owners in Mumbai, including IP filing support
              and brand protection advisory by appointment.
            </p>
          </div>

          <div className="rounded-3xl border bg-neutral-50 p-8">
            <h2 className="text-2xl font-bold">Rajasthan Office</h2>
            <p className="mt-4 text-neutral-600">
              Legal consultation and advisory from Jodhpur, Rajasthan for
              intellectual property, litigation, corporate documentation,
              property, taxation coordination, and related matters.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
