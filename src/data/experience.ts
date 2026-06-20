import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'refineder',
    company: { en: 'Refineder', ar: 'Refineder' },
    role: { en: 'Back-End Developer', ar: 'مطوّر Backend' },
    period: 'Apr 2026 – Present',
    location: { en: 'Remote', ar: 'عن بُعد' },
    highlights: [
      {
        en: 'Develop client CMS and e-commerce backends on the Refinder Laravel SDK platform.',
        ar: 'تطوير backends لمواقع CMS وتجارة إلكترونية للعملاء على منصة Refinder Laravel SDK.',
      },
      {
        en: 'Integrate static UI templates into dynamic Livewire admin and public-facing components.',
        ar: 'دمج قوالب UI ثابتة في مكونات Livewire ديناميكية للإدارة والواجهة العامة.',
      },
      {
        en: 'Deliver bilingual (AR/EN) content management, checkout flows, and marketplace features.',
        ar: 'تسليم إدارة محتوى ثنائية اللغة وتدفقات checkout وميزات marketplace.',
      },
    ],
  },
  {
    id: 'data-link',
    company: { en: 'Data-Link', ar: 'Data-Link' },
    role: { en: 'Back-End Developer', ar: 'مطوّر Backend' },
    period: 'Aug 2025 – Mar 2026',
    location: { en: 'Kuwait · Remote', ar: 'الكويت · عن بُعد' },
    highlights: [
      {
        en: 'Architected backend for classified ads and multivendor marketplace platforms.',
        ar: 'تصميم backend لمنصات إعلانات مبوبة وأسواق multivendor.',
      },
      {
        en: 'Led vendor-side modules, auction API layer, and payment gateway integrations.',
        ar: 'قيادة وحدات البائعين وطبقة API للمزادات وتكامل بوابات الدفع.',
      },
      {
        en: 'Implemented notification infrastructure, reporting modules, and REST API layers.',
        ar: 'تنفيذ بنية إشعارات ووحدات تقارير وطبقات REST API.',
      },
    ],
  },
  {
    id: 'const-tech',
    company: { en: 'Const-Tech', ar: 'Const-Tech' },
    role: { en: 'Back-End Developer', ar: 'مطوّر Backend' },
    period: 'Apr 2025 – Aug 2025',
    location: { en: 'Saudi Arabia · Remote', ar: 'السعودية · عن بُعد' },
    isGeneral: true,
    highlights: [
      {
        en: 'Developed and maintained internal Laravel/Livewire business systems for accounting and operations.',
        ar: 'تطوير وصيانة أنظمة Laravel/Livewire داخلية للمحاسبة والعمليات.',
      },
      {
        en: 'Implemented invoice management with tax, commission, and partial payment workflows.',
        ar: 'تنفيذ إدارة فواتير مع ضريبة وعمولة ودفعات جزئية.',
      },
      {
        en: 'Built financial reporting with account tree aggregation, project tracking, and modal-based admin CRUD.',
        ar: 'بناء تقارير مالية مع شجرة حسابات وتتبع مشاريع و CRUD إداري بـ modals.',
      },
    ],
  },
];
