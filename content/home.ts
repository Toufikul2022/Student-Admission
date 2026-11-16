/** Home page copy that is reused (FAQ also feeds FAQPage JSON-LD). */

export const quickLinks = [
  { label: "Universities", href: "/find-university" },
  { label: "Programs", href: "/find-university/programs" },
  { label: "Scholarships", href: "/study-in-canada/scholarships" },
  { label: "Intakes", href: "/study-in-canada/intakes" },
  { label: "Study permit", href: "/visa-immigration/study-permit" },
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

export const homeStats = [
  // TODO: replace every "[#]" value with real, verifiable numbers before launch — or remove the tile.
  { icon: "school", value: "[#]", label: "Partner institutions", note: "TODO: real number" },
  { icon: "users", value: "[#]", label: "Students advised", note: "TODO: real number" },
  { icon: "map", value: "[#]", label: "Provinces covered", note: "TODO: real number" },
  { icon: "badge", value: "Free", label: "First consultation for students and parents", note: "TODO: confirm offer" },
];

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
    body: "Get structured feedback on your statement of purpose, study plan and supporting documents so they are clear, honest and consistent.",
    href: "/contact",
  },
  {
    icon: "passport",
    title: "Study permit application",
    body: "Licensed professionals help you assemble your study permit application, including proof of funds and any required attestation letter.",
    href: "/visa-immigration/study-permit",
  },
  {
    icon: "refresh",
    title: "Refusal help",
    body: "Had a study permit refused? We review the reasons, explain your options, and help you decide whether to reapply or challenge the decision.",
    href: "/visa-immigration/study-permit-refusal",
  },
  {
    icon: "route",
    title: "Post-graduation pathways",
    body: "Plan ahead for work after graduation and possible routes to permanent residence, so your program choice supports your long-term goals.",
    href: "/visa-immigration/pathways-to-pr",
  },
] as const;

export const studySteps = [
  {
    id: "choose",
    title: "Choose your program",
    body: "Compare institutions and programs by field, level, location, intake and cost. Check that the institution is a designated learning institution (DLI) and, if work after graduation matters to you, whether the program is likely to qualify for a Post-Graduation Work Permit.",
    link: { label: "Find a university", href: "/find-university" },
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
    body: "Review the conditions in your offer, accept it, and pay any required deposit. The letter of acceptance from a DLI is a core document for your study permit.",
    link: null,
  },
  {
    id: "pal",
    title: "Get a provincial or territorial attestation letter (PAL/TAL), if required",
    body: "Many study permit applicants now need an attestation letter from the province or territory where they will study. Your institution usually requests it for you. Some applicants are exempt — check the current rules.",
    link: { label: "Study permit guide", href: "/visa-immigration/study-permit" },
  },
  {
    id: "permit",
    title: "Apply for your study permit",
    body: "Submit your application online with proof of funds, your LOA, any attestation letter and supporting documents. Give your biometrics when asked, and complete a medical exam if required.",
    link: { label: "What you'll need", href: "/visa-immigration/study-permit" },
  },
  {
    id: "travel",
    title: "Prepare to travel",
    body: "Once approved, arrange housing, health insurance, travel and winter clothing. Carry your approval letter, LOA and proof of funds — the officer at the port of entry issues the actual permit.",
    link: { label: "Typical costs", href: "/study-in-canada/costs" },
  },
];

export const homeFaqs = [
  {
    q: "Do you guarantee admission or a study permit?",
    a: "No. Admission decisions are made by each institution and study permit decisions are made by Immigration, Refugees and Citizenship Canada (IRCC). Anyone who promises a guaranteed result should be treated with caution. What we offer is careful preparation and honest advice about your chances.",
  },
  {
    q: "Who gives the immigration advice?",
    a: "Immigration advice is provided by licensed legal professionals working with the law corporation that operates this service. Admission guidance is provided by our advising team.",
  },
  {
    q: "Is the first consultation really free?",
    a: "Yes. The first consultation is an introductory conversation about your goals and options. If you decide to work with us, we will explain any fees in writing before work begins.",
  },
  {
    q: "When should I start preparing to study in Canada?",
    a: "Ideally 12 to 18 months before your intended start date. That leaves time for language tests, applications, an attestation letter if required, and study permit processing.",
  },
  {
    q: "What is a designated learning institution (DLI)?",
    a: "A DLI is a school approved by a provincial or territorial government to host international students. You generally need a letter of acceptance from a DLI to apply for a study permit. IRCC publishes the official DLI list.",
  },
  {
    q: "Can I work while I study in Canada?",
    a: "Many full-time students at eligible institutions can work off campus for a limited number of hours during academic sessions and full time during scheduled breaks. The limits change from time to time, so always check IRCC's current rules.",
  },
  {
    q: "My study permit was refused. Can I still study in Canada?",
    a: "Often, yes. Depending on the reasons, you may be able to reapply with a stronger application or challenge the decision. Deadlines to challenge a decision are short, so speak to a licensed professional promptly.",
  },
  // TODO: consider adding an FAQ that explains your fee model (what is free, what is paid,
  // and whether you receive commissions from institutions) once confirmed with legal.
];
