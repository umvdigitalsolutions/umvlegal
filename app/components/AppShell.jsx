"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isDisclaimerPage = pathname === "/disclaimer";

  return (
    <>
      {isDisclaimerPage ? (
        children
      ) : (
        <>
          <Header />
          <main className="min-h-screen pt-[95px]">
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
