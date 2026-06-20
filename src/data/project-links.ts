import type { LocalizedString } from '../types';

export interface ProjectLink {
  liveUrl?: string;
  videoUrl?: string;
  host?: LocalizedString;
}

function env(key: string): string | undefined {
  const value = import.meta.env[key];
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function link(slug: string, fallback?: ProjectLink): ProjectLink | undefined {
  const prefix = slug.replace(/-/g, '_').toUpperCase();
  const liveFromEnv = env(`PUBLIC_LIVE_URL_${prefix}`);
  const videoFromEnv = env(`PUBLIC_VIDEO_URL_${prefix}`);

  const liveUrl = liveFromEnv ?? fallback?.liveUrl;
  const videoUrl = videoFromEnv ?? fallback?.videoUrl;

  if (!liveUrl && !videoUrl) return undefined;

  return { liveUrl, videoUrl, host: fallback?.host };
}

export const projectLinks: Record<string, ProjectLink | undefined> = {
  bastta: link('bastta', {
    liveUrl: 'https://basta.datalink-kw.com/en',
    host: { en: 'Data-Link', ar: 'Data-Link' },
  }),
  'refineder-website': link('refineder-website', {
    liveUrl: 'https://refineder.com',
    host: { en: 'Refineder', ar: 'Refineder' },
  }),
  'faisal-art-gallery': link('faisal-art-gallery', {
    liveUrl: 'https://faisal.refineders.com/ar',
    host: { en: 'Refineder', ar: 'Refineder' },
  }),
  falwshal: link('falwshal'),
  'magic-garden': link('magic-garden', {
    liveUrl: 'https://magicgarden.refineders.com/ar',
    host: { en: 'Refineder', ar: 'Refineder' },
  }),
  'hudhud-bakery': link('hudhud-bakery', {
    liveUrl: 'https://hudhud.refineders.com/ar',
    host: { en: 'Refineder', ar: 'Refineder' },
  }),
  alshafi: link('alshafi', {
    liveUrl: 'https://alshafi.refineders.com/ar',
    host: { en: 'Refineder', ar: 'Refineder' },
  }),
};

export function getProjectLink(slug: string): ProjectLink | undefined {
  return projectLinks[slug];
}

export function linkHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}
