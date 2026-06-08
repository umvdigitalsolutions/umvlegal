import { pageMetadata } from "../seo";
import TeamClient from "./TeamClient";

export const metadata = pageMetadata({
  title: "Legal Team in Mumbai and Rajasthan",
  description:
    "Meet the UMV Legal & Associates team, including IP, trademark, copyright, litigation, taxation, and advisory professionals serving Mumbai, Rajasthan, Jodhpur, and clients across India.",
  path: "/team",
  keywords: [
    "legal team Mumbai",
    "legal team Rajasthan",
    "trademark agent Mumbai",
    "copyright agent Mumbai",
    "IP lawyers Rajasthan",
    "UMV Legal team",
  ],
});

export default function TeamPage() {
  return <TeamClient />;
}
