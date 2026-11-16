"use client";

/**
 * Two-thumb range slider made of two native range inputs, so each thumb is
 * keyboard-accessible and announced by screen readers.
 */
export function RangeSlider({
  id,
  label,
  min,
  max,
  step,
  value,
  onChange,
  format,
}: {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  format: (n: number) => string;
}) {
  const [lo, hi] = value;
  const pct = (n: number) => ((n - min) / (max - min)) * 100;
  return (
    <fieldset>
      <legend className="sr-only">{label}</legend>
      <div className="mb-3 flex justify-between text-sm font-semibold text-ink" aria-hidden="true">
        <span>{format(lo)}</span>
        <span>{hi >= max ? `${format(max)}+` : format(hi)}</span>
      </div>
      <div className="relative h-6">
        <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-line" />
        <div
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-primary-600"
          style={{ left: `${pct(lo)}%`, right: `${100 - pct(hi)}%` }}
        />
        <input
          id={`${id}-min`}
          type="range"
          min={min}
          max={max}
          step={step}
          value={lo}
          aria-label={`${label}: minimum`}
          aria-valuetext={format(lo)}
          onChange={(e) => onChange([Math.min(Number(e.target.value), hi - step), hi])}
          className="range-thumb pointer-events-none absolute inset-0 w-full appearance-none bg-transparent"
        />
        <input
          id={`${id}-max`}
          type="range"
          min={min}
          max={max}
          step={step}
          value={hi}
          aria-label={`${label}: maximum`}
          aria-valuetext={hi >= max ? `${format(max)} or more` : format(hi)}
          onChange={(e) => onChange([lo, Math.max(Number(e.target.value), lo + step)])}
          className="range-thumb pointer-events-none absolute inset-0 w-full appearance-none bg-transparent"
        />
      </div>
    </fieldset>
  );
}
