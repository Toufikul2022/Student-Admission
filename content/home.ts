/** Home page copy that is reused (FAQ also feeds FAQPage JSON-LD). */

export const quickLinks = [
  { label: "Universities", href: "/find-university" },
  { label: "Programs", href: "/find-university/programs" },
  { label: "Scholarships", href: "/study-in-canada/scholarships" },
  { label: "Intakes", href: "/study-in-canada/intakes" },
  { label: "Language tests", href: "/study-in-canada/language-tests" },
  { label: "Guide me", href: "/contact" },
];

export const popularFields = [
  { label: "Business & Management", href: "/find-university?field=business" },
  { label: "Computer Science & IT", href: "/find-university?field=computing" },
  { label: "Engineering & Technology", href: "/find-university?field=engineering" },
  { label: "Health & Nursing", href: "/find-university?field=health" },
  { label: "Hospitality & Tourism", href: "/find-university?field=hospitality" },
  { label: "Skilled Trades", href: "/find-university?field=trades" },
];

/**
 * Auto image slider under the hero. Images live in public/images/home/.
 * To change one, upload a new file with a NEW name and update src, width and height here.
 * TODO: add the source and date of the province figures (e.g. IRCC open data, year) before going live.
 */
export const heroSlider = [
  {
    src: "/images/home/slide-map-e249a2d4.webp",
    width: 1600,
    height: 934,
    alt: "Map of Canada showing each province's share: Ontario 40%, British Columbia 20%, Québec 17%, Alberta 10%, Manitoba 3%, Nova Scotia 3%, Saskatchewan 2%, New Brunswick 2%, Newfoundland and Labrador 1%, Prince Edward Island 1%, Yukon 0.05%.",
  },
  {
    src: "/images/home/slide-roadmap-6ac27386.webp",
    width: 1549,
    height: 818,
    alt: "University to PR roadmap: choose your university and program, explore scholarships and funding, prepare for a language test, apply for admission, apply for a study permit, begin your studies, apply for a PGWP after graduation, apply for permanent residency, and receive residency.",
  },
  {
    src: "/images/home/slide-pnp-table-b2e969f2.webp",
    width: 1600,
    height: 943,
    alt: "Table comparing study permit holders with Provincial Nominee Program allocations by province: British Columbia 54,035 and 6,254 (12%); Alberta 25,905 and 6,603 (25%); Saskatchewan 5,960 and 5,261 (88%); Manitoba 9,225 and 8,000 (87%); Ontario 106,435 and 14,119 (13%); New Brunswick 6,370 and 4,899 (77%); Nova Scotia 7,175 and 5,709 (79%); Prince Edward Island 1,325 and 1,791 (135%); Newfoundland and Labrador 2,645 and 2,854 (108%). Note: students may consider universities in provinces that offer better opportunities for permanent residence.",
  },
];

/** Home page hero: one heading and one button (no paragraph, no slides). */
export const hero = {
  title: "We help you build a study plan for Canadian PR with real data",
  cta: { label: "Speak to an Advisor", href: "/contact" },
};

export const services = [
  {
    icon: "school",
    title: "University selection",
    body: "We shortlist universities and colleges that fit your grades, budget, career goals and preferred city — and explain the trade-offs.",
    href: "/find-university",
  },
  {
    icon: "file",
    title: "Application support",
    body: "From choosing an intake to uploading transcripts, we help you prepare complete, on-time applications to the schools you choose.",
    href: "/contact",
  },
  {
    icon: "pen",
    title: "SOP & document review",
    body: "Get structured feedback on your statement of purpose, references and supporting documents so they are clear, honest and consistent.",
    href: "/contact",
  },
  {
    icon: "award",
    title: "Scholarship guidance",
    body: "Find entrance and merit awards you may qualify for, plan around their deadlines, and make each scholarship application count.",
    href: "/study-in-canada/scholarships",
  },
  {
    icon: "languages",
    title: "Language test planning",
    body: "Choose the right English or French test for your programs, understand the minimum scores, and plan your test date around deadlines.",
    href: "/study-in-canada/language-tests",
  },
  {
    icon: "route",
    title: "Offers & enrolment",
    body: "Compare your offers, understand conditions and deposits, and get ready for orientation and your first term on campus.",
    href: "/contact",
  },
] as const;

export const studySteps = [
  {
    id: "choose",
    title: "Choose your program",
    body: "Compare institutions and programs by field, level, location, intake and cost. Make sure each institution is a designated learning institution (DLI), approved to accept international students.",
    link: { label: "Find a university", href: "/find-university" },
  },
  {
    id: "requirements",
    title: "Check requirements and take a language test",
    body: "Confirm the academic requirements for each program, and book an accepted English or French test early enough to get your results before the deadline.",
    link: { label: "Compare language tests", href: "/study-in-canada/language-tests" },
  },
  {
    id: "apply",
    title: "Apply to your chosen schools",
    body: "Prepare transcripts, language test results, a statement of purpose and any portfolio or references the program asks for. Apply well before the deadline — popular programs fill early.",
    link: { label: "See intake timelines", href: "/study-in-canada/intakes" },
  },
  {
    id: "offer",
    title: "Receive your offer and letter of acceptance (LOA)",
    body: "Review the conditions in each offer and compare them carefully — program, cost, location and any scholarship included.",
    link: null,
  },
  {
    id: "accept",
    title: "Accept your offer and secure your place",
    body: "Accept the offer that suits you best, pay any required deposit, and apply for scholarships and on-campus housing if available.",
    link: { label: "Explore scholarships", href: "/study-in-canada/scholarships" },
  },
  {
    id: "start",
    title: "Prepare for your first term",
    body: "Arrange housing, health insurance, travel and winter clothing, register for your courses, and sign up for orientation.",
    link: { label: "Typical costs", href: "/study-in-canada/costs" },
  },
];

export const homeFaqs = [
  {
    q: "Do you guarantee admission?",
    a: "No. Admission decisions are made by each institution. Anyone who promises guaranteed admission should be treated with caution. What we offer is careful preparation and honest advice about your chances.",
  },
  {
    q: "When should I start preparing to study in Canada?",
    a: "Ideally 12 to 18 months before your intended start date. That leaves time to research programs, take a language test, prepare documents and apply before deadlines.",
  },
  {
    q: "What is a designated learning institution (DLI)?",
    a: "A DLI is a school approved by a provincial or territorial government to accept international students. Check that every institution on your shortlist is a DLI before you apply.",
  },
  {
    q: "What's the difference between a university and a college in Canada?",
    a: "Universities mainly offer academic degrees (bachelor's, master's and doctoral). Colleges and polytechnics focus on applied, career-oriented diplomas and certificates, and some also grant degrees.",
  },
  {
    q: "Which English test do Canadian institutions accept?",
    a: "Most accept several tests, such as IELTS Academic, TOEFL iBT and PTE Academic, and some accept CELPIP or Duolingo. Minimum scores vary by institution and program.",
  },
  {
    q: "Can you help me find scholarships?",
    a: "Yes. We help you identify entrance and merit awards you may qualify for and plan your applications around their deadlines. Most scholarships are competitive, so applying early helps.",
  },
  // TODO: consider adding an FAQ that explains your fee model (which services are paid,
  // and whether you receive commissions from institutions).
];
