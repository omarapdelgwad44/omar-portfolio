export interface ProjectLogoMeta {
  src: string;
  /** Background pad behind the logo image */
  pad: 'light' | 'dark';
  /** Optional accent for glow effects */
  accent?: string;
  /** Horizontal wordmark logos need more width */
  wide?: boolean;
}

function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${path.replace(/^\//, '')}`;
}

export const projectLogos: Record<string, ProjectLogoMeta> = {
  bastta: { src: publicAsset('projects/logos/bastta.png'), pad: 'dark', accent: '#166534' },
  'refineder-website': {
    src: publicAsset('projects/logos/refineder-website.png'),
    pad: 'light',
    accent: '#10b981',
  },
  'faisal-art-gallery': {
    src: publicAsset('projects/logos/faisal-art-gallery.svg'),
    pad: 'light',
    accent: '#a16207',
  },
  'magic-garden': {
    src: publicAsset('projects/logos/magic-garden.png'),
    pad: 'dark',
    accent: '#059669',
  },
  falwshal: { src: publicAsset('projects/logos/falwshal.svg'), pad: 'dark', accent: '#ff5200' },
  'hudhud-bakery': {
    src: publicAsset('projects/logos/hudhud-bakery.svg'),
    pad: 'light',
    accent: '#d97706',
  },
  alshafi: {
    src: publicAsset('projects/logos/alshafi.svg'),
    pad: 'light',
    accent: '#c5941a',
    wide: true,
  },
};

export function getProjectLogo(slug: string): ProjectLogoMeta | undefined {
  return projectLogos[slug];
}
