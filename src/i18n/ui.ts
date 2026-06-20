import type { Lang } from '../types';

export const ui = {
  meta: {
    title: {
      en: 'Omar Ahmed Sayed — Back-End Developer',
      ar: 'عمر أحمد سيد — مطوّر Backend',
    },
    description: {
      en: 'Back-End Developer specializing in Laravel, Livewire, and scalable web applications. Portfolio showcasing professional projects.',
      ar: 'مطوّر Backend متخصص في Laravel و Livewire وتطبيقات ويب قابلة للتوسع. برتفوليو يعرض المشاريع المهنية.',
    },
  },
  nav: {
    home: { en: 'Home', ar: 'الرئيسية' },
    about: { en: 'About', ar: 'عني' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    contact: { en: 'Contact', ar: 'تواصل' },
  },
  hero: {
    greeting: { en: 'Back-End Developer', ar: 'مطوّر Backend' },
    name: { en: 'Omar Ahmed Sayed', ar: 'عمر أحمد سيد' },
    tagline: {
      en: 'Building scalable Laravel applications with clean architecture, robust APIs, and seamless admin experiences.',
      ar: 'أبني تطبيقات Laravel قابلة للتوسع بمعمارية نظيفة و APIs قوية وتجربة إدارية سلسة.',
    },
    ctaProjects: { en: 'View Projects', ar: 'عرض المشاريع' },
    ctaContact: { en: 'Get in Touch', ar: 'تواصل معي' },
    ctaCv: { en: 'Download CV', ar: 'تحميل السيرة' },
  },
  sections: {
    experience: { en: 'Experience', ar: 'الخبرة' },
    featured: { en: 'Featured Work', ar: 'أبرز الأعمال' },
    archive: { en: 'More Projects', ar: 'مشاريع أخرى' },
    skills: { en: 'Tech Stack', ar: 'التقنيات' },
    contact: { en: 'Contact', ar: 'التواصل' },
  },
  project: {
    viewCase: { en: 'View Details', ar: 'التفاصيل' },
    liveSite: { en: 'Visit Live Site', ar: 'زيارة الموقع' },
    watchDemo: { en: 'Watch Demo', ar: 'شاهد العرض' },
    hostedOn: { en: 'Hosted on', ar: 'مستضاف على' },
    contributions: { en: 'Key Contributions', ar: 'أبرز المساهمات' },
    stack: { en: 'Tech Stack', ar: 'التقنيات' },
    overview: { en: 'Overview', ar: 'نظرة عامة' },
    back: { en: 'Back to Projects', ar: 'العودة للمشاريع' },
    status: {
      live: { en: 'Live', ar: 'منشور' },
      'in-progress': { en: 'In Progress', ar: 'قيد التطوير' },
      'in-development': { en: 'In Development', ar: 'قيد البناء' },
    },
    filter: {
      all: { en: 'All', ar: 'الكل' },
      featured: { en: 'Featured', ar: 'مميز' },
      archive: { en: 'Archive', ar: 'أرشيف' },
    },
  },
  about: {
    title: { en: 'About Me', ar: 'عني' },
    p1: {
      en: 'Results-driven Back-End Developer with hands-on experience building scalable web applications using PHP, Laravel, and Livewire. I focus on clean code, performance optimization, and delivering seamless user experiences through solid back-end logic and integration.',
      ar: 'مطوّر Backend يركز على بناء تطبيقات ويب قابلة للتوسع باستخدام PHP و Laravel و Livewire. أهتم بالكود النظيف وتحسين الأداء وتقديم تجربة مستخدم سلسة عبر منطق backend متين وتكامل فعّال.',
    },
    p2: {
      en: 'I have delivered backend systems for marketplaces, classified ads platforms, corporate CMS websites, and e-commerce solutions across Kuwait, Saudi Arabia, and Qatar — integrating payment gateways, real-time chat, push notifications, and AI-powered features.',
      ar: 'قدّمت أنظمة backend لأسواق إلكترونية ومنصات إعلانات ومواقع CMS للشركات وحلول e-commerce في الكويت والسعودية وقطر — مع تكامل بوابات دفع ومحادثة فورية وإشعارات push وميزات مدعومة بال AI.',
    },
    currently: {
      en: 'Currently at Refineder, developing client CMS and e-commerce backends.',
      ar: 'حالياً في Refineder، أطوّر backends لمواقع CMS وتجارة إلكترونية للعملاء.',
    },
  },
  contact: {
    title: { en: 'Get in Touch', ar: 'تواصل معي' },
    subtitle: {
      en: 'Open to backend roles and freelance opportunities. I typically respond within 24–48 hours.',
      ar: 'متاح لفرص Backend وعمل freelance. عادةً أرد خلال 24–48 ساعة.',
    },
    email: { en: 'Email', ar: 'البريد' },
    linkedin: { en: 'LinkedIn', ar: 'LinkedIn' },
    github: { en: 'GitHub', ar: 'GitHub' },
  },
  footer: {
    rights: { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  },
} as const;

export function uiText<K extends keyof typeof ui>(
  section: K,
  key: keyof (typeof ui)[K],
  lang: Lang,
): string {
  const block = ui[section][key] as Record<Lang, string>;
  return block[lang];
}

export function uiLabel(obj: Record<Lang, string>, lang: Lang): string {
  return obj[lang];
}
