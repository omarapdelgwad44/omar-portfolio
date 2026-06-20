import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'bastta',
    category: 'featured',
    status: 'live',
    company: { en: 'Data-Link', ar: 'Data-Link' },
    period: '2025 – 2026',
    title: { en: 'Bastta', ar: 'بسطة' },
    tagline: {
      en: 'Led vendor-side modules and extended auction API layer',
      ar: 'قيادة وحدات البائعين وتوسيع طبقة API للمزادات',
    },
    overview: {
      en: 'B2B/B2C wholesale marketplace for Kuwait with vendor stores, live auctions, loyalty points, and subscription billing.',
      ar: 'سوق B2B/B2C بالجملة في الكويت مع متاجر بائعين ومزادات حية ونقاط ولاء وفوترة اشتراكات.',
    },
    contributions: [
      {
        en: 'Led vendor-side backend development: onboarding, dashboard, product management, and subscription workflows',
        ar: 'قيادة تطوير backend للبائعين: onboarding ولوحة تحكم وإدارة منتجات واشتراكات',
      },
      {
        en: 'Implemented service provider module enhancements and business logic',
        ar: 'تنفيذ تحسينات على وحدة service provider والمنطق التجاري',
      },
      {
        en: 'Extended auction system with REST APIs, bidding flows, and status automation',
        ar: 'توسيع نظام المزادات بـ REST APIs وتدفقات مزايدة وأتمتة الحالات',
      },
      {
        en: 'Delivered vendor account settings, wholesale management, and plan-gated access control',
        ar: 'تسليم إعدادات حساب البائع وإدارة الجملة والتحكم بالوصول حسب الخطة',
      },
    ],
    stack: ['Laravel 12', 'Livewire 3', 'Firebase', 'REST APIs', 'MySQL'],
  },
  {
    slug: 'refineder-website',
    category: 'featured',
    status: 'live',
    company: { en: 'Refineder', ar: 'Refineder' },
    period: '2026',
    title: { en: 'Refineder Website', ar: 'موقع Refineder' },
    tagline: {
      en: 'Developed corporate CMS with careers and project showcase',
      ar: 'تطوير CMS لموقع شركة مع careers وعرض المشاريع',
    },
    overview: {
      en: 'Corporate agency website with full admin CMS for projects, services, team, blogs, careers, and contact management.',
      ar: 'موقع شركة مع CMS إداري كامل للمشاريع والخدمات والفريق والمدونة والوظائف والتواصل.',
    },
    contributions: [
      {
        en: 'Developed backend CMS: projects, services, about, blogs, careers, and contact modules',
        ar: 'تطوير CMS: مشاريع وخدمات وabout ومدونة وcareers وتواصل',
      },
      {
        en: 'Integrated static HTML templates into dynamic Livewire admin and public components',
        ar: 'دمج قوالب HTML في مكونات Livewire ديناميكية',
      },
      {
        en: 'Implemented careers application system with admin review workflow',
        ar: 'تنفيذ نظام تقديم على الوظائف مع مراجعة إدارية',
      },
      {
        en: 'Delivered footer navigation service and categorized contact management',
        ar: 'تسليم خدمة روابط footer وإدارة تواصل مصنّفة',
      },
    ],
    stack: ['Laravel 12', 'Livewire 4', 'Refinder SDK', 'Spatie Permission', 'Tailwind 4'],
  },
  {
    slug: 'faisal-art-gallery',
    category: 'featured',
    status: 'live',
    company: { en: 'Refineder', ar: 'Refineder' },
    period: '2026',
    title: { en: 'Faisal Art Gallery', ar: 'معرض Faisal' },
    tagline: {
      en: 'Built art e-commerce backend with dual catalog architecture',
      ar: 'تطوير backend لمعرض فني مع كتالوج مزدوج',
    },
    overview: {
      en: 'Art gallery and e-commerce platform with dual catalog (gallery artworks vs art supplies), shop, reviews, and blog.',
      ar: 'منصة معرض فني وتجارة إلكترونية بكتالوج مزدوج (أعمال فنية vs مستلزمات) ومتجر ومراجعات ومدونة.',
    },
    contributions: [
      {
        en: 'Developed art gallery e-commerce backend: shop, dual catalog, reviews, and cart',
        ar: 'تطوير backend للمعرض: متجر وكتالوج مزدوج ومراجعات وسلة',
      },
      {
        en: 'Integrated frontend template into Livewire storefront and admin CMS',
        ar: 'دمج القالب في storefront و CMS إداري بـ Livewire',
      },
      {
        en: 'Implemented contact, blog, shipping settings, and user address management',
        ar: 'تنفيذ تواصل ومدونة وإعدادات شحن وعناوين المستخدم',
      },
    ],
    stack: ['Laravel 12', 'Livewire 4', 'Alpine.js', 'Refinder SDK', 'Tailwind 4'],
  },
  {
    slug: 'falwshal',
    category: 'archive',
    status: 'in-progress',
    company: { en: 'Refineder', ar: 'Refineder' },
    period: '2026',
    title: { en: 'Falwshal', ar: 'Falwshal' },
    tagline: {
      en: 'E-commerce with AI enrichment and chat assistant',
      ar: 'تجارة إلكترونية مع AI enrichment ومساعد محادثة',
    },
    overview: {
      en: 'Furniture e-commerce platform with product catalog, reviews, AI-powered content enrichment, and knowledge-indexed chat assistant.',
      ar: 'منصة تجارة إلكترونية للأثاث مع كتالوج ومراجعات و AI enrichment ومساعد محادثة.',
    },
    contributions: [
      {
        en: 'Built e-commerce backend: product catalog, reviews, shop routing, and customer authentication',
        ar: 'بناء backend: كتالوج ومراجعات ومتجر ومصادقة العملاء',
      },
      {
        en: 'Integrated AI-powered product and blog enrichment with configurable provider settings',
        ar: 'تكامل AI enrichment للمنتجات والمدونة مع إعدادات provider',
      },
      {
        en: 'Implemented knowledge-indexed chat assistant for storefront support',
        ar: 'تنفيذ مساعد محادثة مع فهرسة knowledge',
      },
      {
        en: 'Connected static e-commerce template to Livewire component layer',
        ar: 'ربط قالب e-commerce ثابت بطبقة Livewire',
      },
    ],
    stack: ['Laravel 12', 'Livewire 4', 'Groq AI', 'Tailwind 4', 'MySQL'],
  },
  {
    slug: 'magic-garden',
    category: 'featured',
    status: 'live',
    company: { en: 'Refineder', ar: 'Refineder' },
    period: '2026',
    title: { en: 'Magic Garden Shop', ar: 'Magic Garden' },
    tagline: {
      en: 'Extended artist marketplace with checkout and studio features',
      ar: 'توسيع marketplace للفنانين مع checkout وميزات studio',
    },
    overview: {
      en: 'Artist marketplace e-commerce platform with collections, artist directory, shop, checkout, and artist studio portal.',
      ar: 'منصة marketplace للفنانين مع collections ودليل فنانين ومتجر وcheckout وبوابة studio.',
    },
    contributions: [
      {
        en: 'Continued development of artist marketplace: collections, directory, shop UX, and checkout flows',
        ar: 'متابعة تطوير marketplace: collections ودليل ومتجر وcheckout',
      },
      {
        en: 'Implemented artist studio features: public bio, follow system, and account activation gating',
        ar: 'تنفيذ studio: bio عام ونظام follow وتفعيل الحساب',
      },
      {
        en: 'Extended blog and artist post management with bilingual content support',
        ar: 'توسيع إدارة المدونة ومنشورات الفنانين بدعم ثنائي اللغة',
      },
    ],
    stack: ['Laravel 12', 'Livewire 4', 'Refinder SDK', 'Tailwind 4', 'MySQL'],
  },
  {
    slug: 'hudhud-bakery',
    category: 'archive',
    status: 'live',
    company: { en: 'Refineder', ar: 'Refineder' },
    period: '2026',
    title: { en: 'Hudhud Bakery', ar: 'مخبز Hudhud' },
    tagline: {
      en: 'Developed modular homepage CMS for a bakery marketing website',
      ar: 'تطوير CMS homepage modular لموقع مخبز',
    },
    overview: {
      en: 'Marketing website for a Qatari bakery with rich homepage sections, services, products, team, and gallery management.',
      ar: 'موقع تسويقي لمخبز قطري مع أقسام homepage وخدمات ومنتجات وفريق ومعرض.',
    },
    contributions: [
      {
        en: 'Developed modular homepage CMS: hero, sections, galleries, testimonials',
        ar: 'تطوير CMS homepage: hero وأقسام ومعارض وشهادات',
      },
      {
        en: 'Implemented public pages: services, blog, products, team, FAQ, legal',
        ar: 'تنفيذ صفحات: خدمات ومدونة ومنتجات وفريق وFAQ وlegal',
      },
      {
        en: 'Integrated designs into permissioned dashboard CRUD and website routes',
        ar: 'دمج التصميمات في CRUD إداري ومسارات الموقع',
      },
    ],
    stack: ['Laravel 12', 'Livewire 4', 'Refinder SDK', 'Tailwind 4'],
  },
  {
    slug: 'alshafi',
    category: 'archive',
    status: 'live',
    company: { en: 'Refineder', ar: 'Refineder' },
    period: '2026',
    title: { en: 'Alshafi Law Firm', ar: 'Alshafi' },
    tagline: {
      en: 'Minor UX enhancements on law firm website presentation components',
      ar: 'تحسينات UX بسيطة على مكونات عرض موقع مكتب محاماة',
    },
    overview: {
      en: 'Law firm website for legal services in Doha, Qatar.',
      ar: 'موقع مكتب محاماة لخدمات قانونية في الدوحة.',
    },
    contributions: [
      {
        en: 'Improved team and testimonial presentation with a reusable slider component',
        ar: 'تحسين عرض الفريق والشهادات بمكون slider قابل لإعادة الاستخدام',
      },
      {
        en: 'Added admin-configurable testimonial placeholder image setting',
        ar: 'إضافة إعداد placeholder للشهادات من الإدارة',
      },
    ],
    stack: ['Laravel 12', 'Livewire 3', 'Tailwind 4'],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}

/** Featured Work: Refineder, Bastta, Faisal, Magic Garden */
const FEATURED_SLUGS = ['refineder-website', 'bastta', 'faisal-art-gallery', 'magic-garden'] as const;

export function getFeaturedProjects(): Project[] {
  return FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is Project => p !== undefined,
  );
}
