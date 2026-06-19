"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DisclaimerClient from "../disclaimer/DisclaimerClient";
import Header from "./Header";
import Footer from "./Footer";

const DISCLAIMER_KEY = "umv_disclaimer_session_accepted";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isDisclaimerPage = pathname === "/disclaimer";
  const [fallbackNextPath, setFallbackNextPath] = useState("");

  useEffect(() => {
    if (isDisclaimerPage) {
      const timer = window.setTimeout(() => {
        setFallbackNextPath("");
      }, 0);

      return () => window.clearTimeout(timer);
    }

    let hasAcceptedInSession = false;

    try {
      hasAcceptedInSession =
        sessionStorage.getItem(DISCLAIMER_KEY) === "true" ||
        document.cookie
          .split(";")
          .some((cookie) => cookie.trim() === `${DISCLAIMER_KEY}=true`);
    } catch (error) {}

    if (!hasAcceptedInSession) {
      const nextPath = `${window.location.pathname}${window.location.search}`;
      const timer = window.setTimeout(() => {
        setFallbackNextPath(nextPath);
      }, 0);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setFallbackNextPath("");
    }, 0);

    return () => window.clearTimeout(timer);
  }, [isDisclaimerPage]);

  if (fallbackNextPath && !isDisclaimerPage) {
    return <DisclaimerClient nextPath={fallbackNextPath} />;
  }

  if (isDisclaimerPage) {
    return children;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-[95px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
