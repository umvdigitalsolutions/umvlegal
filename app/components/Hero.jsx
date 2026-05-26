"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_40%)]"></div>

      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>


      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
              Trusted Legal Counsel
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Strategic Legal Solutions
              <span className="block text-blue-700">
                for Individuals & Businesses
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              UMV Legal & Associates provides professional legal counsel helping
              clients navigate complex legal matters with clarity, strategy and
              confidence.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex gap-4 flex-wrap">

              <Link
                href="/contact-us"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg"
              >
                Get Consultation
              </Link>

              <Link
                href="/services"
                className="border border-slate-300 px-8 py-3 rounded-full font-semibold text-slate-800 hover:border-blue-600 hover:text-blue-700 transition"
              >
                Explore Services
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">

              <div>
                <div className="text-2xl font-bold text-slate-900">300+</div>
                <div className="text-sm text-slate-600">Clients</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-slate-900">7+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Cases</div>
              </div>

            </div>

          </div>


          {/* RIGHT LOGO */}
<div className="relative flex items-center justify-center">

  {/* Blue glow aura */}
  <div className="absolute w-[420px] h-[420px] bg-blue-300/30 blur-3xl rounded-full"></div>

  {/* Logo moved upward */}
  <div className="relative -translate-y-24 animate-float animate-rotate-slow">

    <Image
      src="/umv.png"
      alt="UMV Legal & Associates"
      width={520}
      height={520}
      priority
      className="drop-shadow-[0_50px_90px_rgba(0,0,0,0.35)]"
    />

  </div>

</div>

        </div>

      </div>

    </section>
  );
}