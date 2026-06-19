import Image from "next/image";
import Link from "next/link";

const practiceHighlights = [
  "Trademark Registration",
  "Copyright Protection",
  "IP Advisory",
  "Litigation Support",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,17,31,1)_0%,rgba(15,31,55,0.96)_52%,rgba(8,17,31,1)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#d4af37]/40" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-3 border border-[#d4af37]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#f3d98b]">
            Law Firm in Mumbai & Rajasthan
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.06] text-white md:text-6xl lg:text-7xl">
            Strategic legal counsel for brands, businesses and disputes.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            UMV Legal & Associates provides focused support in trademark,
            copyright, intellectual property, corporate advisory, litigation,
            and property matters across Mumbai, Rajasthan, Jodhpur, and India.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-sm bg-[#d4af37] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#08111f] transition hover:bg-[#f1d77f]"
            >
              Practice Areas
            </Link>

            <Link
              href="/ip-resources"
              className="rounded-sm border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#d4af37] hover:text-[#f3d98b]"
            >
              IP Resources
            </Link>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {practiceHighlights.map((item) => (
              <div
                key={item}
                className="border-l border-[#d4af37] bg-white/[0.04] px-4 py-3"
              >
                <p className="text-sm font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-8">
          <div className="absolute -inset-6 border border-[#d4af37]/15" />
          <div className="relative border border-[#d4af37]/45 bg-white p-5 shadow-[18px_18px_0_rgba(212,175,55,0.16)]">
            <div className="border border-slate-200 bg-white p-6">
              <Image
                src="/umv1.png"
                alt="UMV Legal & Associates logo"
                width={560}
                height={560}
                priority
                className="mx-auto h-auto w-full max-w-[360px] object-contain"
              />
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6 text-slate-950">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6a16]">
                UMV Legal & Associates
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight">
                Trademark, Copyright & Business Law Support
              </h2>

              <div className="mt-5 grid gap-3 text-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="font-semibold text-slate-500">
                    Head Office
                  </span>
                  <span className="font-bold text-slate-950">Jodhpur</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="font-semibold text-slate-500">
                    Branch Office
                  </span>
                  <span className="font-bold text-slate-950">Mumbai</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Reach</span>
                  <span className="font-bold text-slate-950">India-wide</span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/ip-resources"
            className="relative mt-7 inline-flex border-b-2 border-[#d4af37] pb-1 text-sm font-bold uppercase tracking-[0.18em] text-[#f3d98b] transition hover:text-white"
          >
            Access IP Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
