# Omar Ahmed Sayed — Portfolio

Professional bilingual portfolio (English / Arabic) built with Astro and Tailwind CSS.

## Live Demo

After deploying to GitHub Pages:

`https://<username>.github.io/omar-portfolio/en/`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/omar-portfolio/en/`

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a repo named `omar-portfolio` on GitHub
2. Push this project to the `main` branch
3. Go to **Settings → Pages → Build and deployment → Source: GitHub Actions**
4. Push to `main` — the workflow deploys automatically

### Custom domain or different repo name

Update `site` and `base` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

For a user site (`username.github.io`), set `base: '/'`.

## Structure

- `src/data/projects.ts` — all project content (EN/AR)
- `src/data/experience.ts` — work experience
- `src/i18n/ui.ts` — UI translations
- `src/pages/[lang]/` — localized routes

## Author

**Omar Ahmed Sayed** — Back-End Developer (PHP / Laravel / Livewire)

- Email: omarapdelgwad44@gmail.com
- LinkedIn: [omar-apd-elgwad](https://linkedin.com/in/omar-apd-elgwad-66330027a)
