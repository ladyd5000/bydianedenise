# bydianedenise.com

Landing page for **Diane Denise** — _Stories. Music. Imagination._

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Featured work

| Project | Link |
| --- | --- |
| The Lantern Library _(featured)_ | https://www.yourlanternlibrary.com |
| The Open Music Vault | https://www.youtube.com/@theopenmusicvault |
| Conscious Kid | https://www.myconsciouskids.org |

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

This repo is a zero-config Vercel project.

1. Push the `bydianedenise/` folder to its own Git repository.
2. In Vercel, **Add New → Project** and import that repo.
3. Framework preset: **Next.js** (auto-detected). No env vars required.
4. Deploy, then add the custom domain **bydianedenise.com** under
   **Project → Settings → Domains**.

Or from the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## Editing content

All copy and links live in [`src/components/data.ts`](src/components/data.ts):

- `featured` — the prominent Lantern Library card
- `projects` — the grid of other projects
- `socials` — social media links

Design tokens (colors, fonts, radius) are in
[`tailwind.config.ts`](tailwind.config.ts).
