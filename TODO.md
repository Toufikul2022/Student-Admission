# Launch checklist — every TODO in the project

Search the code for `TODO` to find each one in context.

## A. Brand and contact details — `config/site.ts`
- [x] Brand name: CanEdu Pathway
- [ ] Domain (`domain`) and `NEXT_PUBLIC_SITE_URL` in your hosting settings
- [ ] Public email, phone (display format + international `phoneHref`)
- [x] WhatsApp channel link (set in `contact.whatsappChannel`)
- [ ] Office address
- [ ] Business hours and time zone
- [x] Law firm name — removed from the site at your request
- [ ] Social media profile URLs (or remove unused ones)

## B. Legal and compliance review
- [ ] **Disclosure wording** (`config/site.ts` → `operatorDisclosure`) — confirm with your regulator
- [ ] **Disclaimer** page (`app/disclaimer/page.tsx`)
- [ ] **Privacy Policy** (`app/privacy-policy/page.tsx`): applicable provincial privacy law and regulatory obligations; name a Privacy Officer and privacy email; list actual service providers and where they store data (e.g. Resend, Vercel); confirm retention periods (placeholder: 24 months)
- [ ] **Terms of Use** (`app/terms/page.tsx`): governing province
- [ ] Remove the "DRAFT — requires legal review" banner after approval (`components/guides/LegalLayout.tsx`, pass `draft={false}`)
- [ ] Professional review of every guide page, then set `reviewed` dates in `content/review-dates.ts`
- [ ] Confirm the "free first consultation" offer (`content/home.ts`, `components/forms/LeadFormSection.tsx`, `app/contact/page.tsx`, home FAQ)
- [ ] Confirm the response-time promise "within one business day" (`app/actions/submit-lead.ts`, `components/forms/LeadFormSection.tsx`)
- [ ] Consider adding an FAQ explaining your fee model and any commissions from institutions (`content/home.ts`)

## C. Immigration figures — `data/immigration-facts.json`
Verify each against the official source, then set `value` and `last_verified`:
- [ ] Study permit application fee
- [ ] Biometrics fee
- [ ] Proof of funds — single student
- [ ] Proof of funds — each additional family member
- [ ] Off-campus work-hour limit
- [ ] National study permit cap
- [ ] PGWP fee
- [ ] PGWP application time limit
- [ ] PGWP language requirement
- [ ] Open work permit holder fee
- [ ] Judicial review deadline — decisions made inside Canada
- [ ] Judicial review deadline — decisions made outside Canada
- [ ] Check every official link in the `links` list still works and set `last_verified`
- [ ] Language test official URLs and acceptance notes (`app/study-in-canada/language-tests/page.tsx`)

## D. Institution and program data — see `DATA_GUIDE.md`
- [ ] For each of the 10 Manitoba sample institutions: verify DLI number, tuition, intakes, levels, fields, PGWP status and admission requirements; rewrite the overview (currently shows "Sample profile — TODO" on the site); set `sample: false` and `last_verified`
- [ ] Confirm Assiniboine College's current official name
- [ ] Replace the 20 sample programs with verified programs
- [ ] Add institution logos (only with permission) to `/public/logos`
- [ ] Remove the "Sample data" notice once everything is verified (`components/institutions/ListingIntro.tsx`)
- [ ] Optional: add more countries to the form's country list (`lib/countries.ts`)

## E. Real content and images
- [ ] Home stats — replace the four `[#]` placeholders with real, verifiable numbers or remove tiles (`content/home.ts`)
- [ ] Testimonials — add real, consented testimonials only (`components/home/Testimonials.tsx`)
- [ ] Hero image — replace the placeholder illustration (`public/images/hero-illustration.svg`, `components/home/Hero.tsx`)
- [ ] Logo — replace the placeholder mark (`components/layout/Logo.tsx`, `app/icon.svg`)
- [ ] Social share image — refresh with the final logo (`app/opengraph-image.tsx`)
- [ ] Office map embed on the Contact page (`app/contact/page.tsx`)
- [ ] Campus map embeds on institution pages (`app/find-university/[slug]/page.tsx`)

## F. Technical setup (see `README.md`)
- [ ] Resend account, verified sending domain, API key
- [ ] `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `CONTACT_FORM_DRY_RUN=false` in hosting settings
- [ ] Decide on analytics (`NEXT_PUBLIC_ANALYTICS`: empty, `plausible` or `ga4`)
- [ ] Send a test enquiry on the live site and confirm it arrives
- [ ] Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools
