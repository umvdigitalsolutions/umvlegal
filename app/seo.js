export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.umvlegalassociates.com";

export const siteName = "UMV Legal & Associates";

export const defaultSeoKeywords = [
  "UMV Legal & Associates",
  "law firm in Mumbai",
  "law firm in Rajasthan",
  "law firm in Jodhpur",
  "IP law firm in Jodhpur",
  "trademark lawyer in Jodhpur",
  "copyright lawyer in Jodhpur",
  "patent lawyer in Jodhpur",
  "legal services in Rajasthan",
  "trademark lawyer Mumbai",
  "trademark attorney Rajasthan",
  "copyright agent Mumbai",
  "trademark class finder India",
  "free trademark checklist",
  "free copyright checklist",
  "IP checklist India",
  "WhatsApp trademark inquiry",
  "intellectual property lawyer India",
  "IP law firm Mumbai",
  "IP law firm Rajasthan",
  "corporate lawyer Mumbai",
  "civil litigation lawyer Rajasthan",
  "criminal defense lawyer Rajasthan",
  "property lawyer Rajasthan",
];

export function pageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/umv1.png",
}) {
  return {
    title,
    description,
    keywords: [...defaultSeoKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl}/#legalservice`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/umv1.png`,
  image: `${siteUrl}/umv1.png`,
  email: "umvlegalassociates@gmail.com",
  telephone: "+91-9967276861",
  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
    },
    {
      "@type": "State",
      name: "Rajasthan",
    },
    {
      "@type": "City",
      name: "Jodhpur",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "83 Sneh Sadan, Jwala Vihar, Chopasni Housing Board, Behind Jeevan Jyoti Hospital",
    addressLocality: "Jodhpur",
    addressRegion: "Rajasthan",
    postalCode: "342008",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/umvlegal/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  serviceType: [
    "Trademark registration",
    "Copyright advisory",
    "Intellectual property law",
    "Corporate and commercial law",
    "Civil litigation",
    "Criminal defense",
    "Property law",
  ],
};
