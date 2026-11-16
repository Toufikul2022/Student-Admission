import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Select } from "@/components/ui/Select";
import { STUDY_LEVELS, fields, provinces } from "@/lib/data";
import { buttonClasses } from "@/components/ui/Button";

/** Plain GET form — works without JavaScript and lands on /find-university?level=…&province=…&field=… */
export function QuickSearch() {
  return (
    <section aria-labelledby="quick-search-title" className="relative z-10 -mt-6 sm:-mt-10">
      <Container>
        <form action="/find-university" method="get" className="rounded-3xl border border-line bg-white p-5 shadow-card-hover sm:p-7">
          <h2 id="quick-search-title" className="mb-4 text-lg font-bold text-ink">
            Find institutions that match you
          </h2>
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
            <Select id="qs-level" name="level" label="Study level" options={STUDY_LEVELS} placeholder="Any level" hideOptional />
            <Select id="qs-province" name="province" label="Province or territory" options={provinces.map((p) => ({ value: p.slug, label: p.name }))} placeholder="Anywhere in Canada" hideOptional />
            <Select id="qs-field" name="field" label="Field of study" options={fields.map((f) => ({ value: f.slug, label: f.label }))} placeholder="Any field" hideOptional />
            <button type="submit" className={buttonClasses("primary", "lg", "w-full md:w-auto")}>
              <Search aria-hidden="true" className="size-5" />
              Search
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
