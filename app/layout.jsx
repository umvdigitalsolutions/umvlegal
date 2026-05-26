import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  title: {
    default: "UMV Legal & Associates",
    template: "%s | UMV Legal & Associates",
  },
  description:
    "UMV Legal & Associates is a modern law firm offering legal support in intellectual property, commercial matters, dispute resolution, and advisory services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_22%),linear-gradient(to_bottom,#ffffff,#fffdf8)]">
          <Header />

          <main className="min-h-screen pt-[95px]">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}