export type Lang = 'en' | 'ar';

export type ProjectCategory = 'featured' | 'archive';

export type ProjectStatus = 'live' | 'in-progress' | 'in-development';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface Project {
  slug: string;
  category: ProjectCategory;
  status?: ProjectStatus;
  company?: LocalizedString;
  period?: string;
  title: LocalizedString;
  tagline: LocalizedString;
  overview: LocalizedString;
  contributions: LocalizedString[];
  stack: string[];
}

export interface Experience {
  id: string;
  company: LocalizedString;
  role: LocalizedString;
  period: string;
  location: LocalizedString;
  highlights: LocalizedString[];
  isGeneral?: boolean;
}
