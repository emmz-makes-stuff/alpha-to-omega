# A→Ω — Ancient Greece, Century by Century

An interactive, single-page timeline of Ancient Greece — from the Bronze Age palaces at Knossos and Mycenae to Rome's annexation of Egypt in 30 BC. Built as a static site with vanilla TypeScript and CSS (no framework), styled around an "elegant antiquity" theme: marble, aged gold, and a fluted column that runs down the page as its scrolling spine.

## Features

- **Ten expandable century sections** — from the Bronze Age background through the 1st century BC, each with a one-line teaser, expanded prose, and a period badge (Prelude / Archaic / Classical / Hellenistic).
- **Inline links** — key names and events in the prose (`Homer`, `the Battle of Marathon`, `Cleisthenes`, ...) link straight to their Wikipedia article.
- **"Explore further" cards** — every major topic (86 in total) has a curated card with links to Wikipedia, a verified YouTube video, and further reading from sites like Perseus Digital Library, the Internet Classics Archive, Livius.org, Attalus.org, World History Encyclopedia, LacusCurtius, Theoi.com, Fordham's Internet History Sourcebooks, and the Met's Heilbrunn Timeline of Art History — only where a genuinely relevant page exists.
- **Expand all / collapse all**, a period legend for quick navigation, and scroll-in reveal animations (respecting `prefers-reduced-motion`).

## Tech stack

- [Vite](https://vitejs.dev/) + vanilla TypeScript — no frontend framework
- Plain CSS with custom properties for the design system (`src/style.css`)
- Content and sourcing data as typed TypeScript modules (`src/data.ts`, `src/sources.ts`)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build a static bundle to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
index.html            entry HTML, fonts, meta
src/
  main.ts             renders the page and wires up interactivity
  data.ts              timeline content, organized by century section
  sources.ts           per-topic source links (Wikipedia, video, further reading)
  types.ts             shared TypeScript types
  style.css            design system and layout
ancient_greece_timeline.md   the source outline the content was built from
```

## Content

The timeline text in `src/data.ts` is adapted from `ancient_greece_timeline.md`. Every linked source in `src/sources.ts` was individually researched and verified rather than guessed — Wikipedia URLs were confirmed to point at the correct article, and YouTube videos were confirmed to exist and match their topic before being included.
