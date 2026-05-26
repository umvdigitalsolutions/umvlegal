"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DisclaimerGate({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (pathname === "/disclaimer") {
      setAllowed(true);
      return;
    }

    const hasCookie =
      typeof document !== "undefined" &&
      document.cookie.includes("umv_disclaimer_accepted=true");

    const hasLocalStorage =
      typeof window !== "undefined" &&
      localStorage.getItem("umv_disclaimer_accepted") === "true";

    if (hasCookie || hasLocalStorage) {
      setAllowed(true);
    } else {
      router.replace("/disclaimer");
    }
  }, [pathname, router]);

  if (pathname === "/disclaimer") {
    return children;
  }

  if (!allowed) {
    return null;
  }

  return children;
}