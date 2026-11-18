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

/** Highlights in the hero card. No figures — text only. */
export const homeStats = [
  { icon: "badge", value: "Personal", label: "one-to-one guidance matched to your goals and budget" },
  { icon: "school", value: "Every step", label: "support from your shortlist to your first day on campus" },
  { icon: "map", value: "Canada-wide", label: "guidance on universities and colleges across Canada" },
  { icon: "users", value: "Clear advice", label: "honest, plain-language guidance for students & parents" },
];

export const heroSlides = [
  {
    title: "Your path to studying in Canada starts here",
    body: "Find the right university, college and program for you, and apply with confidence — with expert admission guidance at every step.",
    cta: { label: "Speak to an Advisor", href: "/contact" },
  },
  {
    title: "Find the right program for your future",
    body: "Compare universities, colleges and courses across Canada by field, level, intake and budget — then let us help you build a strong shortlist.",
    cta: { label: "Search programs", href: "/find-university/programs" },
  },
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
