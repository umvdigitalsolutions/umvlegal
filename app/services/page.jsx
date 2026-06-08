import { pageMetadata } from "../seo";
import ServicesClient from "./ServicesClient";

export const metadata = pageMetadata({
  title: "Legal Services in Mumbai and Rajasthan",
  description:
    "Explore UMV Legal & Associates services for trademark registration, copyright, intellectual property, corporate law, litigation, criminal defense, property law, and international filing in Mumbai and Rajasthan.",
  path: "/services",
  keywords: [
    "legal services Mumbai",
    "legal services Rajasthan",
    "trademark registration Mumbai",
    "copyright lawyer Rajasthan",
    "corporate legal advisory Mumbai",
    "litigation lawyer Jodhpur",
  ],
});

export default function ServicesPage() {
  return <ServicesClient />;
}
