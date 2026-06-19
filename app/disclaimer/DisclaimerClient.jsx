"use client";

import Image from "next/image";

export default function DisclaimerPage({ nextPath }) {
  const ACCEPTED_KEY = "umv_disclaimer_session_accepted";
  const OLD_ACCEPTED_KEY = "umv_disclaimer_accepted";

  const getNextPath = () => {
    const params = new URLSearchParams(window.location.search);
    const resolvedNextPath = nextPath || params.get("next") || "/";

    if (!resolvedNextPath.startsWith("/") || resolvedNextPath.startsWith("//")) {
      return "/";
    }

    return resolvedNextPath;
  };

  const handleAgree = () => {
    try {
      sessionStorage.setItem(ACCEPTED_KEY, "true");
      localStorage.removeItem(OLD_ACCEPTED_KEY);
      document.cookie =
        `${ACCEPTED_KEY}=true; path=/; SameSite=Lax`;
      document.cookie =
        `${OLD_ACCEPTED_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    } catch (error) {}

    window.location.replace(getNextPath());
  };

  const handleDisagree = () => {
    try {
      sessionStorage.removeItem(ACCEPTED_KEY);
      localStorage.removeItem(OLD_ACCEPTED_KEY);
      document.cookie =
        `${ACCEPTED_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie =
        `${OLD_ACCEPTED_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    } catch (error) {}

    window.location.replace("https://www.google.com");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.10),_transparent_30%),linear-gradient(135deg,#0a0a0a,#111827,#000000)] px-6 py-12 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 animate-pulse rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-96 w-96 animate-pulse rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[34px] border border-white/10 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="px-6 py-8 md:px-12 md:py-12">
          <div className="mb-6 flex justify-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-lg backdrop-blur-md">
              <Image
                src="/umv1.png"
                alt="UMV Legal Logo"
                width={180}
                height={80}
                priority
                className="h-auto w-auto object-contain"
              />
            </div>
          </div>

          <div className="mx-auto mb-5 w-fit rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1 text-sm font-medium text-yellow-300">
            Bar Council of India Disclaimer
          </div>

          <h1 className="text-center font-cinzel text-3xl font-bold tracking-[0.08em] text-white md:text-4xl">
            Disclaimer
          </h1>

          <div className="mx-auto mt-4 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <div className="mt-8 space-y-5 text-justify text-sm leading-7 text-neutral-200 md:text-base md:leading-8">
            <p>
              In accordance with the rules of the Bar Council of India, law firms
              and legal professionals are prohibited from soliciting work or
              advertising in any form. By proceeding further and clicking on “I
              Agree,” you acknowledge and confirm the following:
            </p>

            <ul className="list-disc space-y-3 pl-6 marker:text-yellow-400">
              <li>
                You are accessing this website voluntarily, on your own
                initiative, to obtain information about our legal practice and
                the services we offer.
              </li>
              <li>
                There has been no form of advertisement, solicitation, personal
                communication, invitation, or inducement from our office or its
                members to create an attorney-client relationship.
              </li>
              <li>
                Any information provided on this website is for general
                informational purposes only and should not be interpreted as a
                legal opinion or legal advice. For any specific legal concerns,
                you should always seek independent legal advice from a qualified
                professional.
              </li>
              <li>
                Downloading, using, or relying upon the materials on this site is
                entirely at your own discretion and risk. Our office shall not be
                responsible for any consequences of action taken based on such
                information.
              </li>
              <li>
                Use of this website does not create a lawyer-client relationship.
                For personalized legal advice, you must contact us directly and
                formally engage our office.
              </li>
            </ul>

            <p>
              By clicking “I Agree” and accessing this website, you expressly
              acknowledge that you understand and accept the terms of this
              disclaimer.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleAgree}
              className="inline-flex min-w-[170px] items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 px-8 py-3 font-semibold text-black shadow-lg transition duration-300 hover:scale-105"
            >
              I Agree
            </button>

            <button
              type="button"
              onClick={handleDisagree}
              className="inline-flex min-w-[170px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white/10"
            >
              I Disagree
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
