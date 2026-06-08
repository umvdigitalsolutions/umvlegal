"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/services", label: "Services" },
    { href: "/ip-resources", label: "IP Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#d8c7a3]/40 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[95px] items-center justify-between">
          <Link
            href="/"
            className="group flex shrink-0 flex-col items-center justify-center leading-none select-none"
          >
            <span
              className="umv-metal-3d text-3xl font-semibold tracking-[0.22em] md:text-4xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              UMV
            </span>

            <div className="brand-divider gold-blue my-1" />

            <span
              className="text-[10px] tracking-[0.34em] text-slate-600 md:text-xs"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              LEGAL & ASSOCIATES
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-slate-700 transition duration-300 hover:text-[#b68a2f] after:absolute after:left-0 after:top-full after:mt-1 after:h-[2px] after:w-0 after:bg-[#c9a44c] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            <div className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm">
              +91 99672 76861
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[#c9a44c] to-[#e2c06d] px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(201,164,76,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(201,164,76,0.35)]"
            >
              Get Consultation
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-[#c9a44c] hover:text-[#b68a2f] lg:hidden"
          >
            <span className="text-xl leading-none">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {isOpen && (
          <div className="animate-[fadeInDown_0.25s_ease-out] border-t border-slate-200 py-4 lg:hidden">
            <div className="space-y-1 rounded-2xl border border-[#e9dcc0] bg-white p-3 shadow-lg">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fcf7ea] hover:text-[#b68a2f]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-4 pt-3 text-sm text-slate-500">
                +91 99672 76861
              </div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 block rounded-xl bg-gradient-to-r from-[#c9a44c] to-[#e2c06d] px-4 py-3 text-center text-sm font-semibold text-black shadow-md transition hover:opacity-95"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
