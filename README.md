# CanEdu Pathway — Study in Canada website

A fast, search-friendly marketing and lead-generation website for international students who want to study in
Canada. Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS 4**. Almost every page is
generated ahead of time as static HTML, so the site loads quickly and ranks well.

> Before launch, work through **`TODO.md`** — it lists every placeholder, number and legal item that needs your input.

---

## 1. What you need on your computer

- **Node.js 20.9 or newer** (22 recommended). Download from <https://nodejs.org> (choose the "LTS" version).
- A code editor such as **VS Code** (optional, but makes editing easier).

Check Node is installed by opening a terminal and running:

```bash
node -v
```

## 2. First-time setup

1. Open a terminal in this project folder.
2. Install the project's packages (this takes a minute or two):

   ```bash
   npm install
   ```

3. Create your local settings file by copying the example:

   ```bash
   cp .env.example .env.local
   ```

4. Open `.env.local` and fill in the values (explained inside the file). For testing on your computer you can set
   `CONTACT_FORM_DRY_RUN=true` — form submissions are then printed in the terminal instead of emailed.

## 3. Run the site on your computer

```bash
npm run dev
```

Then open <http://localhost:3000> in your browser. Changes you save appear automatically.

## 4. Check everything before publishing

```bash
npm run build
```

```bash
npm run lint
```

Both commands must finish without errors. `npm run build` also tells you which pages were generated.

## 5. Where to edit things

| What you want to change | File |
|---|---|
| Brand name, domain, phone, email, WhatsApp channel, address, hours, social links, **operator disclosure** | `config/site.ts` |
| Home page stats, services, study steps, FAQ | `content/home.ts` |
| "Last reviewed" dates on guide and legal pages | `content/review-dates.ts` |
| Institutions and programs | `data/institutions.json`, `data/programs.json` (see **`DATA_GUIDE.md`**) |
| Fees, proof-of-funds amounts, caps, deadlines, official IRCC links | `data/immigration-facts.json` |
| Provinces and fields of study | `data/provinces.json`, `data/fields.json` |
| Guide page text | `app/study-in-canada/…/page.tsx`, `app/visa-immigration/…/page.tsx` |
| Legal pages | `app/disclaimer`, `app/privacy-policy`, `app/terms` |
| Colours | `app/globals.css` (the `@theme` block at the top) |
| Hero image | `public/images/hero-illustration.svg` (see `components/home/Hero.tsx`) |

## 6. Contact form email (Resend)

The contact form sends each enquiry to your inbox using [Resend](https://resend.com).

1. Create a Resend account and **verify your domain** (Resend → Domains). This lets you send from an address like
   `enquiries@yourdomain.ca`.
2. Create an API key (Resend → API Keys).
3. Set these in `.env.local` and in your hosting dashboard:
   - `RESEND_API_KEY` — the key from step 2
   - `CONTACT_TO_EMAIL` — where enquiries should arrive (several addresses can be separated with commas)
   - `CONTACT_FROM_EMAIL` — e.g. `Website <enquiries@yourdomain.ca>` (must use your verified domain)
   - `CONTACT_FORM_DRY_RUN=false`

**Spam protection:** the form has a hidden "honeypot" field that catches most bots, and limits each visitor to
5 submissions per 10 minutes. On serverless hosting this limit is per server instance, so it is a light brake. If
spam becomes a problem, ask a developer to connect a shared store such as Upstash Redis in `lib/rate-limit.ts`.

## 7. Analytics (optional, off by default)

Set `NEXT_PUBLIC_ANALYTICS` to:

- *(empty)* — no analytics and no cookie banner.
- `plausible` — privacy-friendly, cookieless analytics. Also set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`. No banner is needed.
- `ga4` — Google Analytics 4. Also set `NEXT_PUBLIC_GA4_ID`. A cookie consent banner appears, and GA4 loads only
  after the visitor clicks **Accept**.

## 8. Deploy to Vercel (recommended)

1. Put this project in a GitHub repository.
2. Sign in at <https://vercel.com> with GitHub and click **Add New → Project**, then pick the repository.
3. Under **Environment Variables**, add every variable from `.env.example` with your real values
   (set `NEXT_PUBLIC_SITE_URL` to your final address, e.g. `https://www.yourdomain.ca`).
4. Click **Deploy**. Every time you push changes to GitHub, Vercel rebuilds the site automatically.
5. Add your domain under **Project → Settings → Domains** and follow Vercel's DNS instructions.

After changing environment variables in Vercel, redeploy so the change takes effect.

### Other hosts

The site can run on any host that supports Node.js (`npm run build` then `npm run start`). A fully static export
(plain HTML files, e.g. for basic shared hosting) is possible, but **the contact form needs a server** to send
email. On a static-only host you'd need to point the form at an external form service instead — ask a developer.

## 9. Search engines and AI assistants

- `sitemap.xml` and `robots.txt` are generated automatically from the pages and data files.
- Every page has its own title, description, canonical link and social preview. The default social image is
  generated by `app/opengraph-image.tsx`.
- Structured data (JSON-LD) is included: Organization, WebSite, BreadcrumbList, FAQPage, Article (guides) and
  CollegeOrUniversity / EducationalOrganization (institution pages).
- After launch, submit `https://www.yourdomain.ca/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## 10. Content rules

Immigration advice on this site is provided by licensed legal professionals. Keep these rules when editing content:

- Never use wording like "guaranteed admission", "guaranteed visa", "100% success rate" or "approved by IRCC".
- Never publish invented testimonials, names or statistics.
- Put every immigration number in `data/immigration-facts.json` with its `source_url` and `last_verified` date —
  never type figures directly into page text.
- Update `content/review-dates.ts` whenever a professional reviews a page.
