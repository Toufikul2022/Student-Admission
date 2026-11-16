import { Container } from "@/components/ui/Container";
import { homeStats } from "@/content/home";

/** TODO: placeholder numbers — edit content/home.ts with real, verifiable figures. */
export function StatsStrip() {
  return (
    <section aria-label="At a glance" className="py-14 sm:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {homeStats.map((s) => (
            <div key={s.label} className="flex flex-col rounded-2xl border border-line bg-white p-6 text-center">
              <dt className="order-2 mt-1 text-sm font-medium text-slate">{s.label}</dt>
              <dd className="order-1 text-3xl font-extrabold text-primary-700 sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
