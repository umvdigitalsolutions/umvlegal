"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import DisclaimerGate from "./DisclaimerGate";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isDisclaimerPage = pathname === "/disclaimer";

  return (
    <DisclaimerGate>
      {!isDisclaimerPage && <Header />}
      <main className={isDisclaimerPage ? "min-h-screen" : "min-h-screen pt-[95px]"}>
        {children}
      </main>
      {!isDisclaimerPage && <Footer />}
    </DisclaimerGate>
  );
}