/**
 * Simple in-memory rate limiter: max N submissions per window, per key (IP).
 * Note: on serverless hosts each instance keeps its own memory, so this is a
 * light spam brake, not a hard guarantee. For stricter limits, swap in a shared
 * store such as Upstash Redis (see README).
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return { ok: false as const };
  }
  recent.push(now);
  hits.set(key, recent);
  // Keep memory bounded
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return { ok: true as const };
}
