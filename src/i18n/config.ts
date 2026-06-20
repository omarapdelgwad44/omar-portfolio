import type { Lang } from '../types';

export const languages: Lang[] = ['en', 'ar'];
export const defaultLang: Lang = 'en';

export function isValidLang(lang: string): lang is Lang {
  return lang === 'en' || lang === 'ar';
}

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL.replace(/^\/|\/$/g, '');
  const parts = url.pathname.split('/').filter(Boolean);
  const langIndex = base && parts[0] === base ? 1 : 0;
  const lang = parts[langIndex];
  return isValidLang(lang ?? '') ? lang : defaultLang;
}

export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${lang}${clean ? `/${clean}` : ''}`.replace(/\/{2,}/g, '/');
}

export function t<T extends Record<Lang, string>>(obj: T, lang: Lang): string {
  return obj[lang];
}
