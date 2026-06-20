export interface ProjectLogoMeta {
  src: string;
  /** Background pad behind the logo image */
  pad: 'light' | 'dark';
  /** Optional accent for glow effects */
  accent?: string;
  /** Horizontal wordmark logos need more width */
  wide?: boolean;
}

const base = `${import.meta.env.BASE_URL}projects/logos`;

export const projectLogos: Record<string, ProjectLogoMeta> = {
  bastta: { src: `${base}/bastta.png`, pad: 'dark', accent: '#166534' },
  'refineder-website': { src: `${base}/refineder-website.png`, pad: 'light', accent: '#10b981' },
  'faisal-art-gallery': { src: `${base}/faisal-art-gallery.svg`, pad: 'light', accent: '#a16207' },
  'magic-garden': { src: `${base}/magic-garden.png`, pad: 'dark', accent: '#059669' },
  falwshal: { src: `${base}/falwshal.svg`, pad: 'dark', accent: '#ff5200' },
  'hudhud-bakery': { src: `${base}/hudhud-bakery.svg`, pad: 'light', accent: '#d97706' },
  alshafi: { src: `${base}/alshafi.svg`, pad: 'light', accent: '#c5941a', wide: true },
};

export function getProjectLogo(slug: string): ProjectLogoMeta | undefined {
  return projectLogos[slug];
}
