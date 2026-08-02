export interface Source {
  topic: string;
  wikipedia: string;
  youtube: { title: string; channel: string; url: string } | null;
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
