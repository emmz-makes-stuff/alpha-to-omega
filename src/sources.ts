import type { Source } from "./types";

export const researchedSources: Source[] = [];

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function findSource(topic: string): Source | undefined {
  const target = normalize(topic);
  return (
    researchedSources.find((s) => normalize(s.topic) === target) ??
    researchedSources.find((s) => normalize(s.topic).includes(target) || target.includes(normalize(s.topic)))
  );
}
