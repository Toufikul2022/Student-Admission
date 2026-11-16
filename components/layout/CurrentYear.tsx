"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** Current year, computed in the browser so the static HTML never goes stale. */
export function CurrentYear() {
  const year = useSyncExternalStore(
    noop,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span>{year}</span>;
}
