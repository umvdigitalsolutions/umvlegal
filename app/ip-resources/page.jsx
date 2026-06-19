import { pageMetadata } from "../seo";
import IPResourcesClient from "./IPResourcesClient";

export const metadata = pageMetadata({
  title: "IP Resources - Trademark Class Finder & Checklists",
  description:
    "Use UMV Legal IP resources including a trademark class finder, filing readiness notes, and downloadable trademark, copyright, and brand protection checklists for Mumbai, Rajasthan, and India.",
  path: "/ip-resources",
  keywords: [
    "trademark class finder",
    "free trademark checklist",
    "free IP checklist",
    "trademark filing checklist",
    "trademark class search India",
    "copyright checklist India",
  ],
});

export default function IPResourcesPage() {
  return <IPResourcesClient />;
}
