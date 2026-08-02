export interface Video {
  title: string;
  channel: string;
  url: string;
}

export interface ExtraLink {
  label: string;
  url: string;
}

export interface Source {
  /** Short canonical label used for inline [[links]] in prose and as a fallback display name. */
  name: string;
  topic: string;
  wikipedia: string;
  videos: Video[];
  extra: ExtraLink[];
  blurb: string;
}

export interface ContentBlock {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export type Period = 'Prelude' | 'Archaic' | 'Classical' | 'Hellenistic';

export interface CenturySection {
  id: string;
  numeral: string;
  eraLabel: string;
  dateRange: string;
  period: Period;
  title: string;
  teaser: string;
  blocks: ContentBlock[];
  sourceTopics: string[];
}
