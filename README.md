# Meyyarivu — AI & Machine Learning Portfolio

A responsive Next.js portfolio highlighting AI and machine learning projects, skills, and contact links. It keeps the template's light/dark theme, glass panels, and subtle motion, with support for reduced-motion preferences.

## Run locally

Install dependencies with pnpm, then start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). To create a production build, run `pnpm build`.

## Personalize before publishing

Edit [`src/data/resume.tsx`](./src/data/resume.tsx) to update your GitHub URL, LinkedIn URL, email address, resume file path, and portfolio domain. The current resume is served from `public/resume.pdf` and linked from the hero and About sections. Replace that file when you have a newer CV, or update the path in the profile config.

Project descriptions and technologies are maintained in [`src/data/projects.ts`](./src/data/projects.ts). Add repository URLs and screenshots there only when available and verified.
