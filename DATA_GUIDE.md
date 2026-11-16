# Data guide: adding institutions, programs and immigration figures

All listing data lives in plain JSON files in `/data`. No database is needed. After editing, run
`npm run build` — the build fails if a file is broken, so you'll know straight away.

> **Golden rule:** only enter information you have checked on an **official source**, and record that source in
> `source_url` and the date you checked it in `last_verified`. If you don't know a value, use `null` — the site
> shows "TBC" or "To be confirmed" automatically. Never estimate tuition, DLI numbers or PGWP eligibility.

## Official sources to use

1. **IRCC Designated Learning Institutions (DLI) list** — confirms an institution can host international students
   and gives its DLI number. Search the official list on canada.ca (the link is stored in
   `data/immigration-facts.json` under `dli_list`).
2. **The institution's own website** — programs, international tuition, intakes, admission and language requirements.
3. **IRCC pages** — for PGWP program eligibility and anything immigration-related.

Do not copy data from agent or aggregator websites.

## `data/institutions.json`

Each institution is one `{ … }` block in the list. Copy an existing block, then edit it.

| Field | What to enter | Example |
|---|---|---|
| `slug` | Lowercase web-address name, words separated by hyphens. Must be unique. Becomes `/find-university/<slug>`. | `"university-of-manitoba"` |
| `name` | Official name, exactly as the institution writes it | `"University of Manitoba"` |
| `type` | `"University"`, `"College"` or `"Polytechnic"` | `"University"` |
| `province` | Province slug from `data/provinces.json` | `"manitoba"` |
| `city` | Main campus city | `"Winnipeg"` |
| `dliNumber` | DLI number from the IRCC list, as text — or `null` | `"O19…"` |
| `website` | Official homepage | `"https://umanitoba.ca/"` |
| `logo` | Path to a logo in `/public` (only with permission) — or `null` to show initials | `"/logos/umanitoba.svg"` |
| `overview` | 1–3 sentences **in your own words** | |
| `campusAddress` | Main campus address — or `null` | |
| `tuitionRangeCad` | Lowest and highest annual international tuition in CAD, as numbers without `$` or commas — or `null` | `{ "min": 20000, "max": 35000 }` |
| `intakes` | Start months: `"jan"`, `"may"`, `"sep"` (any 3-letter month works) | `["sep", "jan"]` |
| `hasPgwpEligiblePrograms` | `true`, `false`, or `null` if not yet confirmed | `null` |
| `fields` | Field slugs from `data/fields.json` | `["business", "computing"]` |
| `levels` | Any of `"diploma"`, `"bachelor"`, `"postgraduate-certificate"`, `"masters"`, `"phd"` | `["bachelor", "masters"]` |
| `admissionRequirements` | Short list of general requirements | |
| `popularity` | Your own sort order for "Popularity" (higher shows first). It is not a public ranking. | `80` |
| `featured` | `true` to show on the home page (the top 6 by popularity are used) | `true` |
| `sample` | `true` while unverified (shows a "Sample data" badge). Set to `false` once everything is verified. | `false` |
| `source_url` | Main page you verified against | |
| `last_verified` | Date you checked, as `"YYYY-MM-DD"` — or `null` | `"2027-01-15"` |

## `data/programs.json`

| Field | What to enter |
|---|---|
| `id` | Unique id, lowercase with hyphens, e.g. `"um-bsc-computer-science"` |
| `institutionSlug` | The `slug` of the institution |
| `name` | Official program name |
| `level` | One of the five level values above |
| `field` | One field slug from `data/fields.json` |
| `durationMonths` | Number of months, or `null` |
| `tuitionPerYearCad` | Annual international tuition in CAD as a number, or `null` |
| `intakes` | As above |
| `languageRequirement` | Short text, e.g. `"IELTS Academic 6.5 overall, no band below 6.0"`, or `null` |
| `pgwpEligible` | `true`, `false` or `null` — confirm against IRCC's current rules |
| `sample`, `source_url`, `last_verified` | As above |

## `data/immigration-facts.json`

Every immigration figure on the site (fees, proof-of-funds amounts, work-hour limits, caps, deadlines) comes from
this one file, so you can update them all in one place.

- `facts`: set `value` to the display text exactly as it should appear (e.g. `"$150 CAD"`), and update
  `last_verified`. While `value` is `null`, pages show "to be confirmed" with a link to the official source.
- `links`: official IRCC and government links used in "Official sources" boxes. Check each link still works and set
  `last_verified`.

## Adding a new field of study or province

- Fields: add `{ "slug": "…", "label": "…" }` to `data/fields.json`.
- Provinces: all 13 provinces and territories are already included. Edit the text in `data/provinces.json` as needed.

## Checking your work

```bash
npm run build
```

Then run `npm run dev` and look at `/find-university` and the institution's own page.
