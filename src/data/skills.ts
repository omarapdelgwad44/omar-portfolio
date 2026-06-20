export const skills = [
  { name: 'PHP / OOP', category: 'core' },
  { name: 'Laravel', category: 'core' },
  { name: 'Livewire', category: 'core' },
  { name: 'REST APIs', category: 'core' },
  { name: 'Sanctum', category: 'core' },
  { name: 'Eloquent ORM', category: 'core' },
  { name: 'MySQL', category: 'data' },
  { name: 'Firebase FCM', category: 'integration' },
  { name: 'WebSockets / Reverb', category: 'integration' },
  { name: 'Spatie Packages', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Vite', category: 'tools' },
  { name: 'mPDF / DomPDF', category: 'integration' },
  { name: 'Queue Jobs', category: 'core' },
];

export const skillCategories: Record<string, { en: string; ar: string }> = {
  core: { en: 'Core', ar: 'أساسي' },
  data: { en: 'Database', ar: 'قواعد البيانات' },
  integration: { en: 'Integrations', ar: 'تكامل' },
  tools: { en: 'Tools', ar: 'أدوات' },
  frontend: { en: 'Frontend', ar: 'واجهة' },
};
