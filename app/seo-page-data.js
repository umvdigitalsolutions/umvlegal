export const keywordResearchMethodology = {
  source:
    "WordStream-style keyword research using the site URL and each requested seed keyword, prioritizing relevance, local intent, legal service intent, IP intent, commercial strength, and manageable competition.",
  filters: [
    "Excluded broad informational phrases without legal service intent.",
    "Excluded misleading or guarantee-led phrases that are unsuitable for advocate website content.",
    "Preferred local Jodhpur and Rajasthan keywords for service pages.",
    "Preferred long-tail procedural keywords for blog pages.",
  ],
};

const commonLinks = [
  "/trademark-registration-jodhpur",
  "/trademark-objection-reply",
  "/trademark-opposition-india",
  "/trademark-hearing-india",
  "/copyright-registration-jodhpur",
  "/patent-filing-india",
  "/design-registration-india",
  "/startup-legal-services",
  "/corporate-lawyer-jodhpur",
  "/property-lawyer-jodhpur",
  "/ip-law-firm-jodhpur",
  "/law-firm-jodhpur",
];

export const keywordMapping = [
  {
    pageType: "Service",
    url: "/trademark-registration-jodhpur",
    primaryKeyword: "trademark registration in Jodhpur",
    secondaryKeywords: [
      "trademark lawyer in Jodhpur",
      "brand name registration in Jodhpur",
      "logo registration in India",
      "trademark filing in India",
      "trademark registration Rajasthan",
      "trademark attorney Jodhpur",
      "trademark class search India",
      "trademark registration process India",
    ],
    intent: "Local commercial service intent",
    metaTitle: "Trademark Registration in Jodhpur | Brand & Logo Protection",
    metaDescription:
      "Learn about trademark registration in Jodhpur, including brand name protection, logo registration, trademark search, filing process and common trademark objections in India.",
    internalLinks: [
      "/trademark-objection-reply",
      "/trademark-opposition-india",
      "/trademark-hearing-india",
      "/copyright-registration-jodhpur",
      "/ip-law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/trademark-objection-reply",
    primaryKeyword: "trademark objection reply",
    secondaryKeywords: [
      "trademark examination report reply",
      "reply to trademark objection",
      "section 9 trademark objection",
      "section 11 trademark objection",
      "trademark objection lawyer",
      "trademark objection reply format",
      "trademark hearing after objection",
      "user affidavit trademark objection",
    ],
    intent: "National legal service intent",
    metaTitle: "Trademark Objection Reply in India | Examination Report Reply",
    metaDescription:
      "Understand the process of replying to a trademark examination report in India, including Section 9, Section 11, user affidavit and trademark hearing-related issues.",
    internalLinks: [
      "/trademark-registration-jodhpur",
      "/trademark-hearing-india",
      "/trademark-opposition-india",
      "/ip-law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/trademark-opposition-india",
    primaryKeyword: "trademark opposition in India",
    secondaryKeywords: [
      "trademark opposition reply",
      "counter statement trademark",
      "notice of opposition trademark",
      "Rule 45 evidence trademark",
      "Rule 46 evidence trademark",
      "Rule 48 trademark evidence",
      "trademark opposition lawyer India",
      "trademark opposition hearing",
    ],
    intent: "Dispute and prosecution service intent",
    metaTitle: "Trademark Opposition in India | Counter Statement & Evidence",
    metaDescription:
      "Learn about trademark opposition proceedings in India, including notice of opposition, counter statement, evidence under Rules 45, 46 and 48, and hearing process.",
    internalLinks: [
      "/trademark-registration-jodhpur",
      "/trademark-objection-reply",
      "/trademark-hearing-india",
      "/ip-law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/trademark-hearing-india",
    primaryKeyword: "trademark hearing in India",
    secondaryKeywords: [
      "trademark hearing after objection",
      "trademark hearing notice",
      "trademark show cause hearing",
      "trademark hearing documents",
      "trademark hearing process India",
    ],
    intent: "Procedural legal service intent",
    metaTitle: "Trademark Hearing in India | Objection & Opposition Hearings",
    metaDescription:
      "Understand trademark hearings in India, including hearing notices, preparation, documents, submissions and next steps after objection or opposition.",
    internalLinks: [
      "/trademark-objection-reply",
      "/trademark-opposition-india",
      "/trademark-registration-jodhpur",
      "/ip-law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/copyright-registration-jodhpur",
    primaryKeyword: "copyright registration in Jodhpur",
    secondaryKeywords: [
      "copyright lawyer in Jodhpur",
      "copyright registration India",
      "logo copyright India",
      "artistic work copyright",
      "literary work copyright",
    ],
    intent: "Local IP service intent",
    metaTitle: "Copyright Registration in Jodhpur | Creative Work Protection",
    metaDescription:
      "Learn about copyright registration in Jodhpur for artistic, literary, digital and creative works, including documents, process and legal considerations.",
    internalLinks: [
      "/blog/how-to-copyright-logo-india",
      "/trademark-registration-jodhpur",
      "/ip-law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/patent-filing-india",
    primaryKeyword: "patent filing in India",
    secondaryKeywords: [
      "patent lawyer in Jodhpur",
      "provisional patent application India",
      "complete patent specification India",
      "patent search India",
      "startup patent filing India",
    ],
    intent: "National IP filing intent",
    metaTitle: "Patent Filing in India | Patent Search & Specification Support",
    metaDescription:
      "Learn about patent filing in India, including patentability review, prior art search, provisional filing, complete specification and prosecution stages.",
    internalLinks: [
      "/startup-legal-services",
      "/design-registration-india",
      "/ip-law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/design-registration-india",
    primaryKeyword: "design registration in India",
    secondaryKeywords: [
      "industrial design registration",
      "product design protection India",
      "design filing India",
      "design registration process India",
      "design piracy protection",
    ],
    intent: "Product IP protection intent",
    metaTitle: "Design Registration in India | Product Appearance Protection",
    metaDescription:
      "Understand design registration in India for product appearance, shape, configuration, pattern and ornamentation, including filing and examination steps.",
    internalLinks: [
      "/patent-filing-india",
      "/trademark-registration-jodhpur",
      "/ip-law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/startup-legal-services",
    primaryKeyword: "startup legal services India",
    secondaryKeywords: [
      "startup legal advisory India",
      "founders agreement India",
      "startup contracts India",
      "startup IP protection",
      "legal services for startups",
    ],
    intent: "Business legal service intent",
    metaTitle: "Startup Legal Services in India | Contracts, IP & Compliance",
    metaDescription:
      "Information on startup legal services in India, including founders agreements, contracts, IP protection, brand filing and early-stage legal documentation.",
    internalLinks: [
      "/trademark-registration-jodhpur",
      "/patent-filing-india",
      "/corporate-lawyer-jodhpur",
      "/ip-law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/corporate-lawyer-jodhpur",
    primaryKeyword: "corporate lawyer in Jodhpur",
    secondaryKeywords: [
      "corporate legal services Jodhpur",
      "commercial lawyer Jodhpur",
      "business contract lawyer",
      "company legal advisory Rajasthan",
      "contract drafting Jodhpur",
    ],
    intent: "Local business legal intent",
    metaTitle: "Corporate Lawyer in Jodhpur | Contracts & Business Advisory",
    metaDescription:
      "Learn about corporate legal services in Jodhpur for contracts, commercial documentation, business structuring and legal risk review.",
    internalLinks: [
      "/startup-legal-services",
      "/property-lawyer-jodhpur",
      "/law-firm-jodhpur",
    ],
  },
  {
    pageType: "Service",
    url: "/property-lawyer-jodhpur",
    primaryKeyword: "property lawyer in Jodhpur",
    secondaryKeywords: [
      "property legal services Jodhpur",
      "title document review Jodhpur",
      "property dispute lawyer Rajasthan",
      "real estate lawyer Jodhpur",
      "sale deed review Jodhpur",
    ],
    intent: "Local property dispute and documentation intent",
    metaTitle: "Property Lawyer in Jodhpur | Title, Documents & Disputes",
    metaDescription:
      "Information on property legal services in Jodhpur, including title review, document checks, sale-related documentation and property dispute strategy.",
    internalLinks: [
      "/corporate-lawyer-jodhpur",
      "/law-firm-jodhpur",
      "/contact",
    ],
  },
  {
    pageType: "Service",
    url: "/ip-law-firm-jodhpur",
    primaryKeyword: "IP law firm in Jodhpur",
    secondaryKeywords: [
      "trademark lawyer in Jodhpur",
      "copyright lawyer in Jodhpur",
      "patent lawyer in Jodhpur",
      "legal services in Rajasthan",
      "trademark registration in Jodhpur",
    ],
    intent: "Local IP law firm discovery intent",
    metaTitle: "IP Law Firm in Jodhpur | Trademark, Copyright & Patent",
    metaDescription:
      "UMV Legal & Associates provides information on IP legal services in Jodhpur, including trademark, copyright, patent, design and brand protection matters.",
    internalLinks: [
      "/trademark-registration-jodhpur",
      "/copyright-registration-jodhpur",
      "/patent-filing-india",
      "/design-registration-india",
    ],
  },
  {
    pageType: "Service",
    url: "/law-firm-jodhpur",
    primaryKeyword: "law firm in Jodhpur",
    secondaryKeywords: [
      "legal services in Rajasthan",
      "corporate lawyer in Jodhpur",
      "property lawyer in Jodhpur",
      "IP law firm in Jodhpur",
      "civil litigation Jodhpur",
    ],
    intent: "Local law firm discovery intent",
    metaTitle: "Law Firm in Jodhpur | Legal Services in Rajasthan",
    metaDescription:
      "UMV Legal & Associates provides information on legal services in Jodhpur and Rajasthan across IP, corporate, property, civil and litigation-related matters.",
    internalLinks: commonLinks,
  },
  {
    pageType: "Blog",
    url: "/blog/how-to-register-trademark-in-india",
    primaryKeyword: "how to register trademark in India",
    secondaryKeywords: [
      "trademark registration process India",
      "trademark filing in India",
      "trademark class search India",
      "brand name registration India",
    ],
    intent: "Long-tail informational intent",
    metaTitle: "How to Register a Trademark in India | Step-by-Step Guide",
    metaDescription:
      "A practical guide to trademark registration in India, including search, class selection, filing, examination, objection and publication stages.",
    internalLinks: [
      "/trademark-registration-jodhpur",
      "/trademark-objection-reply",
      "/blog/documents-required-for-trademark-registration",
    ],
  },
  {
    pageType: "Blog",
    url: "/blog/documents-required-for-trademark-registration",
    primaryKeyword: "documents required for trademark registration",
    secondaryKeywords: [
      "trademark filing documents India",
      "brand name registration documents",
      "logo registration documents",
      "trademark user affidavit",
    ],
    intent: "Document checklist intent",
    metaTitle: "Documents Required for Trademark Registration in India",
    metaDescription:
      "Checklist of documents commonly required for trademark registration in India for individuals, businesses, startups and logo or brand filings.",
    internalLinks: [
      "/trademark-registration-jodhpur",
      "/blog/how-to-register-trademark-in-india",
      "/trademark-objection-reply",
    ],
  },
  {
    pageType: "Blog",
    url: "/blog/what-is-trademark-objection",
    primaryKeyword: "what is trademark objection",
    secondaryKeywords: [
      "trademark objection reply",
      "trademark examination report reply",
      "section 9 trademark objection",
      "section 11 trademark objection",
    ],
    intent: "Informational objection intent",
    metaTitle: "What Is Trademark Objection? Meaning, Reply & Next Steps",
    metaDescription:
      "Understand what a trademark objection means in India, why examination reports are issued, how replies are filed and what may happen next.",
    internalLinks: [
      "/trademark-objection-reply",
      "/blog/section-9-trademark-objection",
      "/blog/section-11-trademark-objection",
    ],
  },
  {
    pageType: "Blog",
    url: "/blog/section-9-trademark-objection",
    primaryKeyword: "section 9 trademark objection",
    secondaryKeywords: [
      "absolute grounds trademark objection",
      "descriptive trademark objection",
      "distinctiveness trademark India",
      "trademark objection reply",
    ],
    intent: "Specific legal information intent",
    metaTitle: "Section 9 Trademark Objection in India | Absolute Grounds",
    metaDescription:
      "Learn about Section 9 trademark objections in India, including descriptiveness, lack of distinctiveness and common response considerations.",
    internalLinks: [
      "/trademark-objection-reply",
      "/blog/what-is-trademark-objection",
      "/blog/section-11-trademark-objection",
    ],
  },
  {
    pageType: "Blog",
    url: "/blog/section-11-trademark-objection",
    primaryKeyword: "section 11 trademark objection",
    secondaryKeywords: [
      "relative grounds trademark objection",
      "similar trademark objection",
      "confusing similarity trademark India",
      "trademark examination report reply",
    ],
    intent: "Specific legal information intent",
    metaTitle: "Section 11 Trademark Objection in India | Relative Grounds",
    metaDescription:
      "Understand Section 11 trademark objections in India involving earlier marks, similarity, confusion risk and reply strategy considerations.",
    internalLinks: [
      "/trademark-objection-reply",
      "/blog/what-is-trademark-objection",
      "/blog/honest-concurrent-use-trademark",
    ],
  },
  {
    pageType: "Blog",
    url: "/blog/trademark-opposition-process-india",
    primaryKeyword: "trademark opposition process India",
    secondaryKeywords: [
      "trademark opposition in India",
      "notice of opposition trademark",
      "counter statement trademark",
      "trademark opposition evidence",
    ],
    intent: "Procedural dispute information intent",
    metaTitle: "Trademark Opposition Process in India | Timeline & Evidence",
    metaDescription:
      "A guide to the trademark opposition process in India, including notice of opposition, counter statement, evidence stages and hearing.",
    internalLinks: [
      "/trademark-opposition-india",
      "/blog/trademark-objection-vs-opposition",
      "/trademark-hearing-india",
    ],
  },
  {
    pageType: "Blog",
    url: "/blog/trademark-objection-vs-opposition",
    primaryKeyword: "trademark objection vs opposition",
    secondaryKeywords: [
      "difference between trademark objection and opposition",
      "trademark objection reply",
      "trademark opposition in India",
      "trademark examination report",
    ],
    intent: "Comparison information intent",
    metaTitle: "Trademark Objection vs Opposition | Key Differences in India",
    metaDescription:
      "Compare trademark objection and trademark opposition in India, including who raises them, when they occur and how the response process differs.",
    internalLinks: [
      "/trademark-objection-reply",
      "/trademark-opposition-india",
      "/blog/trademark-opposition-process-india",
    ],
  },
  {
    pageType: "Blog",
    url: "/blog/honest-concurrent-use-trademark",
    primaryKeyword: "honest concurrent use trademark",
    secondaryKeywords: [
      "honest concurrent use India",
      "section 12 trademark India",
      "similar trademark coexistence",
      "trademark opposition reply",
    ],
    intent: "Advanced trademark information intent",
    metaTitle: "Honest Concurrent Use in Trademark Law | India Guide",
    metaDescription:
      "Understand honest concurrent use in Indian trademark law, including when coexistence arguments may be considered in objections or opposition matters.",
    internalLinks: [
      "/trademark-objection-reply",
      "/trademark-opposition-india",
      "/blog/section-11-trademark-objection",
    ],
  },
  {
    pageType: "Blog",
    url: "/blog/how-to-copyright-logo-india",
    primaryKeyword: "how to copyright logo in India",
    secondaryKeywords: [
      "logo copyright India",
      "copyright registration India",
      "trademark vs copyright logo",
      "copyright lawyer in Jodhpur",
    ],
    intent: "Long-tail copyright information intent",
    metaTitle: "How to Copyright a Logo in India | Copyright and Trademark",
    metaDescription:
      "Learn how logo copyright works in India, when trademark registration may also matter, and what documents are commonly reviewed before filing.",
    internalLinks: [
      "/copyright-registration-jodhpur",
      "/trademark-registration-jodhpur",
      "/ip-law-firm-jodhpur",
    ],
  },
];

const topicDetails = {
  "/trademark-registration-jodhpur": {
    heroKicker: "Trademark Registration",
    heading: "Trademark Registration in Jodhpur",
    intro:
      "Trademark registration helps brand owners protect names, logos, taglines and other source identifiers used for goods or services. For businesses in Jodhpur and Rajasthan, a clear filing strategy can reduce avoidable objections and improve long-term brand protection.",
    sections: [
      {
        title: "What the process usually involves",
        items: [
          "Identifying the correct trademark owner and nature of the mark.",
          "Reviewing classes and descriptions of goods or services.",
          "Conducting a preliminary search for identical or similar marks.",
          "Preparing filing details, supporting documents and user information.",
          "Monitoring examination, publication and possible objection stages.",
        ],
      },
      {
        title: "Common issues to check early",
        items: [
          "Whether the mark is descriptive, generic or lacking distinctiveness.",
          "Whether similar earlier marks exist in related classes.",
          "Whether logo, word mark and brand name filings should be handled separately.",
          "Whether proof of use or a user affidavit may be required.",
        ],
      },
    ],
  },
  "/trademark-objection-reply": {
    heroKicker: "Trademark Examination",
    heading: "Trademark Objection Reply in India",
    intro:
      "A trademark objection is raised through an examination report when the Trade Marks Registry identifies legal or procedural concerns. A reply should address the exact grounds raised, supporting facts, case law where relevant and documents showing use or distinctiveness.",
    sections: [
      {
        title: "Typical objection grounds",
        items: [
          "Section 9 objections involving descriptiveness or lack of distinctiveness.",
          "Section 11 objections involving similarity with earlier trademarks.",
          "Clarifications about goods, services, applicant details or user claims.",
          "Requests for supporting documents, affidavits or corrected information.",
        ],
      },
      {
        title: "Reply preparation points",
        items: [
          "Read the examination report carefully before drafting.",
          "Match arguments to the exact statutory ground raised.",
          "Use supporting evidence only where it helps the factual position.",
          "Prepare for a hearing if the Registry lists the application after reply review.",
        ],
      },
    ],
  },
  "/trademark-opposition-india": {
    heroKicker: "Trademark Disputes",
    heading: "Trademark Opposition in India",
    intro:
      "Trademark opposition is a post-publication proceeding where a third party challenges registration of a published trademark. It is different from examination objection because it is adversarial and involves pleadings, evidence and hearing stages.",
    sections: [
      {
        title: "Core stages",
        items: [
          "Notice of opposition filed by the opposing party.",
          "Counter statement filed by the applicant within the prescribed timeline.",
          "Evidence stages under the Trade Marks Rules, including Rules 45, 46 and 48.",
          "Final hearing and order based on pleadings, evidence and submissions.",
        ],
      },
      {
        title: "Issues commonly raised",
        items: [
          "Likelihood of confusion with an earlier mark.",
          "Prior use, reputation or goodwill claims.",
          "Bad faith filing allegations.",
          "Honest concurrent use or coexistence arguments.",
        ],
      },
    ],
  },
  "/trademark-hearing-india": {
    heroKicker: "Trademark Hearing",
    heading: "Trademark Hearing in India",
    intro:
      "A trademark hearing may be fixed after an objection reply, opposition matter or other prosecution issue. Preparation usually focuses on the hearing notice, application record, cited marks, evidence and concise legal submissions.",
    sections: [
      {
        title: "Before the hearing",
        items: [
          "Review the hearing notice and current application status.",
          "Study the examination report, reply and documents already filed.",
          "Prepare submissions on distinctiveness, similarity or use, as applicable.",
          "Keep authorization and supporting records ready for the hearing.",
        ],
      },
      {
        title: "After the hearing",
        items: [
          "Track the order or direction issued by the Registry.",
          "Comply with any document or clarification requirement.",
          "Plan appeal or further action only after reviewing the final order.",
        ],
      },
    ],
  },
  "/copyright-registration-jodhpur": {
    heroKicker: "Copyright",
    heading: "Copyright Registration in Jodhpur",
    intro:
      "Copyright protects original expression in works such as artistic works, literary content, software, music, photographs and certain digital assets. Registration can create useful official records for enforcement, licensing and ownership clarity.",
    sections: [
      {
        title: "Works often reviewed",
        items: [
          "Logos, artistic works, graphics and packaging artwork.",
          "Books, website text, scripts, software code and other literary works.",
          "Photographs, audio-visual material and digital creative assets.",
        ],
      },
      {
        title: "Documents and checks",
        items: [
          "Ownership and authorship details should be clear before filing.",
          "Assignments or no-objection documents may be needed in some situations.",
          "For logos, trademark protection may also be relevant alongside copyright.",
        ],
      },
    ],
  },
  "/patent-filing-india": {
    heroKicker: "Patent Filing",
    heading: "Patent Filing in India",
    intro:
      "Patent filing protects inventions that may satisfy novelty, inventive step and industrial applicability requirements. Early review of disclosure, prior art and commercial goals helps decide whether provisional or complete filing is appropriate.",
    sections: [
      {
        title: "Planning points",
        items: [
          "Document the invention before public disclosure.",
          "Review patentability and prior art at an early stage.",
          "Decide between provisional filing and complete specification filing.",
          "Coordinate technical drawings, claims and specification drafting carefully.",
        ],
      },
      {
        title: "Startup considerations",
        items: [
          "Align filings with product roadmap and funding discussions.",
          "Check whether patent, design, copyright or trade secret protection is more suitable.",
          "Maintain confidentiality until the filing strategy is clear.",
        ],
      },
    ],
  },
  "/design-registration-india": {
    heroKicker: "Design Registration",
    heading: "Design Registration in India",
    intro:
      "Design registration protects the visual appearance of an article, including shape, configuration, pattern or ornamentation. It is useful where product appearance or packaging design has independent commercial value.",
    sections: [
      {
        title: "What to review",
        items: [
          "Whether the design is new and not previously disclosed.",
          "Whether the visual features are applied to an article.",
          "Whether drawings or representations clearly show the design.",
          "Whether overlapping trademark, copyright or patent issues exist.",
        ],
      },
      {
        title: "Filing considerations",
        items: [
          "Classify the article correctly.",
          "Prepare accurate views and representations.",
          "Avoid public disclosure before a filing strategy is finalized.",
        ],
      },
    ],
  },
  "/startup-legal-services": {
    heroKicker: "Startup Legal",
    heading: "Startup Legal Services in India",
    intro:
      "Startups often need legal clarity on founders, brand ownership, contracts, confidentiality and IP protection. Early documentation helps reduce disputes and makes commercial decisions easier to review during growth or funding discussions.",
    sections: [
      {
        title: "Early-stage documents",
        items: [
          "Founders agreement or internal understanding between co-founders.",
          "Service agreements, vendor contracts, NDAs and employment-related templates.",
          "Trademark, copyright, patent or design filing strategy for core assets.",
          "Website terms, privacy documents and basic compliance review.",
        ],
      },
      {
        title: "Risk areas",
        items: [
          "Unclear ownership of brand names, code, content or product designs.",
          "Informal commercial arrangements without written scope or payment terms.",
          "Using a brand before checking trademark availability.",
        ],
      },
    ],
  },
  "/corporate-lawyer-jodhpur": {
    heroKicker: "Corporate Legal",
    heading: "Corporate Lawyer in Jodhpur",
    intro:
      "Corporate legal support in Jodhpur can include contract drafting, business documentation, commercial risk review and transaction support. Clear documentation is especially important for growing businesses and founder-led companies.",
    sections: [
      {
        title: "Common work areas",
        items: [
          "Commercial agreements, service contracts and vendor documentation.",
          "Founder, shareholder and confidentiality documentation.",
          "Legal review of business arrangements and transaction terms.",
          "Coordination for corporate compliance and business structuring questions.",
        ],
      },
      {
        title: "Why drafting detail matters",
        items: [
          "Payment, termination and liability clauses reduce future uncertainty.",
          "Intellectual property ownership should be addressed in service relationships.",
          "Dispute resolution clauses should match the commercial context.",
        ],
      },
    ],
  },
  "/property-lawyer-jodhpur": {
    heroKicker: "Property Legal",
    heading: "Property Lawyer in Jodhpur",
    intro:
      "Property matters often require careful document review, title checks and dispute strategy. In Jodhpur and Rajasthan, property legal work may involve sale documents, possession issues, family transfers, development arrangements or civil litigation.",
    sections: [
      {
        title: "Common review areas",
        items: [
          "Title documents, sale deeds, transfer records and revenue entries.",
          "Possession, boundary, inheritance or co-owner issues.",
          "Agreement drafting, notices and dispute-related pleadings.",
        ],
      },
      {
        title: "Before signing documents",
        items: [
          "Check chain of title and identity of parties.",
          "Review encumbrances, permissions and pending disputes where relevant.",
          "Record payment, delivery and possession terms clearly.",
        ],
      },
    ],
  },
  "/ip-law-firm-jodhpur": {
    heroKicker: "IP Law Firm",
    heading: "IP Law Firm in Jodhpur",
    intro:
      "UMV Legal & Associates provides information and legal support on intellectual property matters in Jodhpur, Rajasthan and India, including trademarks, copyright, patents, designs, brand protection and IP-related disputes.",
    sections: [
      {
        title: "IP services covered",
        items: [
          "Trademark search, filing, objection replies, hearings and opposition matters.",
          "Copyright registration and ownership documentation.",
          "Patent filing coordination and design registration strategy.",
          "Brand protection planning for startups, creators and businesses.",
        ],
      },
      {
        title: "Keyword research priority",
        items: [
          "Local IP searches show strong relevance for Jodhpur and Rajasthan pages.",
          "Trademark and copyright terms carry direct legal service intent.",
          "Long-tail procedural topics are best suited to supporting blog pages.",
        ],
      },
    ],
  },
  "/law-firm-jodhpur": {
    heroKicker: "Local Law Firm",
    heading: "Law Firm in Jodhpur",
    intro:
      "UMV Legal & Associates provides legal information and assistance for clients in Jodhpur, Rajasthan and India across intellectual property, corporate, property, civil and litigation-related matters.",
    sections: [
      {
        title: "Practice areas",
        items: [
          "Intellectual property law, including trademark, copyright, patent and design matters.",
          "Corporate and commercial documentation.",
          "Property and real estate legal review.",
          "Civil, criminal, family and litigation-related legal work.",
        ],
      },
      {
        title: "Local search intent",
        items: [
          "People searching locally often need practice-area guidance before consultation.",
          "Dedicated service pages help match IP, corporate and property queries to relevant information.",
          "Informational blog pages support complex trademark and copyright topics.",
        ],
      },
    ],
  },
};

const blogDetails = {
  "/blog/how-to-register-trademark-in-india": {
    heading: "How to Register a Trademark in India",
    intro:
      "Trademark registration in India starts with choosing a protectable mark and ends only after examination, publication and registration stages are complete. The process should be planned around the brand, class, user claim and possible objections.",
    sections: [
      {
        title: "Step-by-step overview",
        items: [
          "Shortlist the brand name, logo or tagline to be protected.",
          "Identify relevant trademark classes and goods or services.",
          "Conduct a trademark search for identical or similar marks.",
          "File the application with correct applicant and user details.",
          "Respond to examination reports or objections where issued.",
          "Track publication, opposition period and registration.",
        ],
      },
    ],
  },
  "/blog/documents-required-for-trademark-registration": {
    heading: "Documents Required for Trademark Registration",
    intro:
      "The documents required for trademark registration depend on the applicant type, brand use and nature of the mark. Clean documentation helps avoid procedural delays and supports user claims where needed.",
    sections: [
      {
        title: "Common documents",
        items: [
          "Applicant name, address and legal status.",
          "Logo or word mark details, if applicable.",
          "Goods or services description and relevant class information.",
          "Power of attorney or authorization where required.",
          "User proof such as invoices, labels, website records or advertisements when prior use is claimed.",
        ],
      },
    ],
  },
  "/blog/what-is-trademark-objection": {
    heading: "What Is Trademark Objection?",
    intro:
      "A trademark objection is an official concern raised during examination of a trademark application. It does not automatically mean refusal, but it requires a reasoned reply within the applicable timeline.",
    sections: [
      {
        title: "Why objections happen",
        items: [
          "The mark appears descriptive or non-distinctive.",
          "The mark appears similar to an earlier trademark.",
          "The goods or services need clarification.",
          "The user claim or applicant details need supporting documents.",
        ],
      },
    ],
  },
  "/blog/section-9-trademark-objection": {
    heading: "Section 9 Trademark Objection",
    intro:
      "Section 9 objections relate to absolute grounds for refusal, such as lack of distinctiveness, descriptive wording or generic expressions. Replies usually focus on inherent distinctiveness, acquired distinctiveness or overall impression.",
    sections: [
      {
        title: "Typical response points",
        items: [
          "Explain why the mark is capable of identifying source.",
          "Show that the mark is suggestive or distinctive rather than descriptive.",
          "Use evidence of use where acquired distinctiveness is relevant.",
          "Clarify the relationship between the mark and the listed goods or services.",
        ],
      },
    ],
  },
  "/blog/section-11-trademark-objection": {
    heading: "Section 11 Trademark Objection",
    intro:
      "Section 11 objections relate to relative grounds, usually because an examiner finds earlier marks that may be similar. Replies should compare the marks, goods, services, consumers, trade channels and overall likelihood of confusion.",
    sections: [
      {
        title: "Comparison factors",
        items: [
          "Visual, phonetic and conceptual differences between marks.",
          "Differences in goods, services, consumers or trade channels.",
          "Prior use, honest adoption or coexistence facts where applicable.",
          "Limitations, disclaimers or amendments only where strategically suitable.",
        ],
      },
    ],
  },
  "/blog/trademark-opposition-process-india": {
    heading: "Trademark Opposition Process in India",
    intro:
      "Trademark opposition begins after a trademark is advertised or published. It allows third parties to oppose registration through pleadings, evidence and hearing stages before the Registry.",
    sections: [
      {
        title: "Process stages",
        items: [
          "Notice of opposition.",
          "Counter statement.",
          "Opponent evidence.",
          "Applicant evidence.",
          "Reply evidence where applicable.",
          "Hearing and final order.",
        ],
      },
    ],
  },
  "/blog/trademark-objection-vs-opposition": {
    heading: "Trademark Objection vs Opposition",
    intro:
      "Trademark objection and trademark opposition are often confused, but they occur at different stages and involve different parties. Objection is raised by the Registry during examination, while opposition is filed by a third party after publication.",
    sections: [
      {
        title: "Key differences",
        items: [
          "Objection is an examination stage issue; opposition is a post-publication dispute.",
          "Objection involves the applicant and Registry; opposition involves another party.",
          "Objection replies are usually written submissions; opposition involves pleadings and evidence.",
          "Both can lead to hearings depending on the record.",
        ],
      },
    ],
  },
  "/blog/honest-concurrent-use-trademark": {
    heading: "Honest Concurrent Use in Trademark Law",
    intro:
      "Honest concurrent use may become relevant where similar marks have coexisted in good faith. It is a fact-sensitive argument and generally requires careful evidence of adoption, use, geography, consumer context and absence of confusion.",
    sections: [
      {
        title: "Evidence often considered",
        items: [
          "Date and circumstances of adoption.",
          "Duration, extent and geography of use.",
          "Sales, invoices, advertisements and market presence.",
          "Instances of actual confusion, if any.",
          "Good faith conduct of the applicant.",
        ],
      },
    ],
  },
  "/blog/how-to-copyright-logo-india": {
    heading: "How to Copyright a Logo in India",
    intro:
      "A logo may involve copyright protection as an artistic work, while trademark registration protects its use as a brand identifier. Businesses often need to evaluate both routes depending on how the logo is used.",
    sections: [
      {
        title: "Practical checks",
        items: [
          "Confirm who created the logo and who owns the rights.",
          "Check whether assignment or no-objection documents are needed.",
          "Decide whether copyright, trademark or both protections are suitable.",
          "Keep original artwork files and usage records organized.",
        ],
      },
    ],
  },
};

export const seoPages = keywordMapping.map((entry) => {
  const details = topicDetails[entry.url] || blogDetails[entry.url];

  return {
    ...entry,
    ...details,
    slug: entry.url.replace(/^\//, "").split("/"),
    isBlog: entry.pageType === "Blog",
  };
});

export function getSeoPageByPath(path) {
  return seoPages.find((page) => page.url === path);
}

