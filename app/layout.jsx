import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import AppShell from "./components/AppShell";
import {
  defaultSeoKeywords,
  organizationSchema,
  pageMetadata,
  siteUrl,
} from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "UMV Legal & Associates - IP, Trademark & Legal Services in Jodhpur and Rajasthan",
    template: "%s | UMV Legal & Associates",
  },
  description:
    "UMV Legal & Associates provides trademark, copyright, intellectual property, corporate, property, litigation, and legal advisory information in Jodhpur, Rajasthan, Mumbai, and across India.",
  keywords: defaultSeoKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: pageMetadata({
    title:
      "UMV Legal & Associates - IP, Trademark & Legal Services in Jodhpur and Rajasthan",
    description:
      "Trademark, copyright, IP, corporate, property, litigation, and legal advisory information for clients in Jodhpur, Rajasthan, Mumbai, and across India.",
    path: "/",
  }).openGraph,
  twitter: pageMetadata({
    title:
      "UMV Legal & Associates - IP, Trademark & Legal Services in Jodhpur and Rajasthan",
    description:
      "Trademark, copyright, IP, corporate, property, litigation, and legal advisory information for clients in Jodhpur, Rajasthan, Mumbai, and across India.",
    path: "/",
  }).twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/umv1.png",
    shortcut: "/umv1.png",
    apple: "/umv1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_22%),linear-gradient(to_bottom,#ffffff,#fffdf8)]">
          <AppShell>
            {children}
          </AppShell>
        </div>
      </body>
    </html>
  );
}
