import "./style.css";
import { sections } from "./data";
import { findSource, findSourceByName } from "./sources";
import type { ContentBlock, Period } from "./types";

const periodMeta: Record<Period, { label: string; range: string; color: string }> = {
  Prelude: { label: "Prelude", range: "3000–800 BC", color: "var(--period-prelude)" },
  Archaic: { label: "Archaic", range: "800–480 BC", color: "var(--period-archaic)" },
  Classical: { label: "Classical", range: "480–323 BC", color: "var(--period-classical)" },
  Hellenistic: { label: "Hellenistic", range: "323–30 BC", color: "var(--period-hellenistic)" },
};

const wikiIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 5h4l3.2 8.6L13.6 5H17l-5.6 14h-2.8L5.6 8.4 3 14.6V5Z"/><path d="M13.6 5h7.4l-5.2 13.2" stroke-linecap="round"/></svg>`;
const playIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5" width="19" height="14" rx="3.5"/><path d="M10.5 9.2v5.6l5-2.8-5-2.8Z" fill="currentColor" stroke="none"/></svg>`;
const linkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 14 20 4M20 4h-6M20 4v6" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const chevronIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const downArrow = `<svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1v20M2 15l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Renders [[Name]] or [[Name|Display text]] tokens as external links to that
 * source's Wikipedia article. Each name links only once per section (tracked
 * via `linked`) so repeated mentions don't clutter the prose.
 */
function linkify(text: string, linked: Set<string>): string {
  const tokenPattern = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  let result = "";
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = tokenPattern.exec(text))) {
    result += escapeHtml(text.slice(lastIndex, match.index));
    const key = match[1].trim();
    const display = (match[2] ?? match[1]).trim();
    const src = findSourceByName(key);
    const normKey = key.toLowerCase();
    if (src && !linked.has(normKey)) {
      linked.add(normKey);
      result += `<a class="inline-link" href="${escapeHtml(src.wikipedia)}" target="_blank" rel="noopener noreferrer">${escapeHtml(display)}</a>`;
    } else {
      result += escapeHtml(display);
    }
    lastIndex = tokenPattern.lastIndex;
  }
  result += escapeHtml(text.slice(lastIndex));
  return result;
}

function renderBlock(block: ContentBlock, linked: Set<string>): string {
  const paras = block.paragraphs.map((p) => `<p>${linkify(p, linked)}</p>`).join("");
  const list = block.list
    ? `<ul>${block.list.map((li) => `<li>${linkify(li, linked)}</li>`).join("")}</ul>`
    : "";
  return `
    <div class="block">
      <h4 class="block-heading">${escapeHtml(block.heading)}</h4>
      ${paras}
      ${list}
    </div>
  `;
}

function renderSourceCard(topic: string): string {
  const src = findSource(topic);
  if (!src) {
    return `
      <div class="source-card">
        <div class="source-topic">${escapeHtml(topic)}</div>
      </div>
    `;
  }
  const videoLinks = src.videos
    .map(
      (v) =>
        `<a class="source-link" href="${escapeHtml(v.url)}" target="_blank" rel="noopener noreferrer">${playIcon}<span>${escapeHtml(v.channel)}</span></a>`
    )
    .join("");
  const extraLinks = src.extra
    .map(
      (e) =>
        `<a class="source-link" href="${escapeHtml(e.url)}" target="_blank" rel="noopener noreferrer">${linkIcon}<span>${escapeHtml(e.label)}</span></a>`
    )
    .join("");
  return `
    <div class="source-card">
      <div class="source-topic">${escapeHtml(src.topic)}</div>
      <p class="source-blurb">${escapeHtml(src.blurb)}</p>
      <div class="source-links">
        <a class="source-link" href="${escapeHtml(src.wikipedia)}" target="_blank" rel="noopener noreferrer">${wikiIcon}<span>Wikipedia</span></a>
        ${videoLinks}
        ${extraLinks}
      </div>
    </div>
  `;
}

function renderEra(section: (typeof sections)[number], index: number): string {
  const meta = periodMeta[section.period];
  const numeralMarkup = section.numeral
    ? escapeHtml(section.numeral)
    : `<span aria-hidden="true">&#10022;</span>`;

  const linked = new Set<string>();
  const blocks = section.blocks.map((b) => renderBlock(b, linked)).join("");
  const sourceCards = section.sourceTopics.map(renderSourceCard).join("");

  return `
    <article class="era" data-index="${index}" style="--dot:${meta.color}">
      <div class="era-spine">
        <div class="spine-line top"></div>
        <div class="spine-badge" title="${escapeHtml(meta.label)}">${numeralMarkup}</div>
        <div class="spine-line bottom"></div>
      </div>
      <div class="era-card">
        <button class="era-summary" aria-expanded="false" aria-controls="era-body-${index}" data-toggle="${index}">
          <span class="era-summary-text">
            <span class="era-eyebrow">
              <span>${escapeHtml(meta.label)}</span>
              <span class="sep">&middot;</span>
              <span class="range">${escapeHtml(section.dateRange)}</span>
            </span>
            <h3 class="era-title">${escapeHtml(section.eraLabel)} — ${escapeHtml(section.title)}</h3>
            <span class="era-teaser">${escapeHtml(section.teaser)}</span>
          </span>
          <span class="chevron" aria-hidden="true">${chevronIcon}</span>
        </button>
        <div class="era-body" id="era-body-${index}">
          <div class="era-body-inner">
            <div class="era-content">
              ${blocks}
              <div class="sources">
                <div class="sources-label">Explore further</div>
                <div class="source-grid">${sourceCards}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function render(): void {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <header class="site-header">
      <a class="logo" href="#top">A<span class="arrow">&rarr;</span>&Omega;</a>
      <div class="header-controls">
        <button class="btn-ghost" id="expand-all">Expand all</button>
        <button class="btn-ghost" id="collapse-all">Collapse all</button>
      </div>
    </header>

    <main>
      <section class="hero" id="top">
        <p class="hero-kicker">A history of Ancient Greece</p>
        <h1 class="hero-mark">A<span class="arrow">&rarr;</span>&Omega;</h1>
        <p class="hero-range"><span class="rule"></span>3000 BC<span class="rule flip"></span>&nbsp;&mdash;&nbsp;<span class="rule"></span>30 BC<span class="rule flip"></span></p>
        <p class="hero-intro">From the palace at Knossos to Cleopatra's last stand at Actium &mdash; twenty-nine centuries of Ancient Greece, laid out one century at a time.</p>
        <a class="hero-scroll-cue" href="#timeline">Begin<br />${downArrow}</a>
      </section>

      <nav class="legend" aria-label="Historical periods">
        ${(Object.keys(periodMeta) as Period[])
          .map((p) => {
            const m = periodMeta[p];
            return `<a class="legend-pill" href="#${firstIdForPeriod(p)}" style="--dot:${m.color}"><span class="dot"></span>${m.label} <span style="color:var(--ink-faint)">&nbsp;${m.range}</span></a>`;
          })
          .join("")}
      </nav>

      <div class="timeline" id="timeline">
        <div class="column-cap">${capitalSvg()}</div>
        ${sections.map(renderEra).join("")}
        <div class="column-base">
          ${ruinsSvg()}
          <p class="ruins-epigraph"><b>30 BC.</b> Egypt falls to Rome, and Ancient Greece ends as an independent political entity &mdash; though its language, thought, and art endure for millennia after.</p>
        </div>
      </div>
    </main>

    <footer class="site-footer">
      <a class="logo" href="#top">A<span class="arrow">&rarr;</span>&Omega;</a>
      <p>Alpha to Omega &mdash; a century-by-century tour of Ancient Greece, from the Bronze Age palaces to Rome's annexation of Egypt. Sources linked throughout are Wikipedia and YouTube.</p>
    </footer>
  `;

  wireInteractions();
}

function firstIdForPeriod(period: Period): string {
  const match = sections.find((s) => s.period === period);
  return match ? `era-body-${sections.indexOf(match)}` : "timeline";
}

function capitalSvg(): string {
  return `
    <svg width="90" height="46" viewBox="0 0 90 46" fill="none" aria-hidden="true">
      <rect x="8" y="34" width="74" height="7" rx="1.5" fill="var(--gold-pale)" opacity="0.7"/>
      <path d="M20 34c0-9 3-13 3-18 0-5-4-6-4-6s6-3 12-1c4 1.4 4.5 5 4.5 5s1-5 8.5-5 8.5 5 8.5 5 .5-3.6 4.5-5c6-2 12 1 12 1s-4 1-4 6c0 5 3 9 3 18" stroke="var(--gold)" stroke-width="2" opacity="0.75" fill="none"/>
      <rect x="16" y="40" width="58" height="5" rx="1" fill="var(--gold-pale)" opacity="0.55"/>
    </svg>
  `;
}

function ruinsSvg(): string {
  return `
    <svg width="220" height="70" viewBox="0 0 220 70" fill="none" aria-hidden="true">
      <ellipse cx="110" cy="63" rx="95" ry="5" fill="var(--ink)" opacity="0.06"/>
      <g opacity="0.8">
        <rect x="18" y="40" width="46" height="15" rx="2" fill="var(--marble-300)" stroke="var(--ink-faint)" stroke-width="1" transform="rotate(-4 41 47)"/>
        <rect x="66" y="46" width="34" height="13" rx="2" fill="var(--marble-300)" stroke="var(--ink-faint)" stroke-width="1" transform="rotate(3 83 52)"/>
        <rect x="150" y="20" width="16" height="38" rx="2" fill="var(--marble-300)" stroke="var(--ink-faint)" stroke-width="1" transform="rotate(-2 158 39)"/>
        <rect x="168" y="44" width="38" height="14" rx="2" fill="var(--marble-300)" stroke="var(--ink-faint)" stroke-width="1" transform="rotate(-6 187 51)"/>
        <rect x="118" y="49" width="24" height="11" rx="2" fill="var(--marble-300)" stroke="var(--ink-faint)" stroke-width="1" transform="rotate(8 130 54)"/>
      </g>
    </svg>
  `;
}

function wireInteractions(): void {
  const eras = Array.from(document.querySelectorAll<HTMLElement>(".era"));

  function setOpen(era: HTMLElement, open: boolean): void {
    const btn = era.querySelector<HTMLButtonElement>(".era-summary");
    era.classList.toggle("--open", open);
    btn?.setAttribute("aria-expanded", String(open));
  }

  eras.forEach((era) => {
    const btn = era.querySelector<HTMLButtonElement>(".era-summary");
    btn?.addEventListener("click", () => {
      setOpen(era, !era.classList.contains("--open"));
    });
  });

  document.getElementById("expand-all")?.addEventListener("click", () => {
    eras.forEach((era) => setOpen(era, true));
  });
  document.getElementById("collapse-all")?.addEventListener("click", () => {
    eras.forEach((era) => setOpen(era, false));
  });

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cards = Array.from(document.querySelectorAll<HTMLElement>(".era-card"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.add("in-view"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    cards.forEach((c) => io.observe(c));
  }

  // Legend links point at a section id; open that era on arrival.
  document.querySelectorAll<HTMLAnchorElement>(".legend-pill").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href")?.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;
      const era = target?.closest<HTMLElement>(".era");
      if (era) {
        e.preventDefault();
        setOpen(era, true);
        era.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
      }
    });
  });
}

render();
