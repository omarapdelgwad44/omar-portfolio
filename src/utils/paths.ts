/** Join Astro base URL with an asset path safely. */
export function assetPath(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\//, '')}`;
}

/** Absolute URL for meta tags (Open Graph, etc.). */
export function absoluteUrl(path: string): string {
  const site = import.meta.env.SITE?.replace(/\/$/, '') ?? '';
  const relative = assetPath(path);
  return `${site}${relative.startsWith('/') ? relative : `/${relative}`}`;
}
