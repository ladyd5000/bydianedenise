# bydianedenise.com

Landing page for **Diane Denise** — _Stories. Music. Purpose._

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Sections

Hero (with portrait) → pull-quote → About → featured **The Lantern Library**
→ **My World** verb-tile grid (Read / Listen / Watch / Impact / Connect)
→ Connect (email + socials) → footer.

## Links

| Tile | Destination |
| --- | --- |
| Read → The Lantern Library _(featured)_ | https://www.yourlanternlibrary.com |
| Listen / Watch → The Open Music Vault | https://www.youtube.com/@theopenmusicvault |
| Impact → My Conscious Kids | https://myconsciouskids.org |
| Contact | dianeddavis@gmail.com |

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

- `featured` — the prominent Lantern Library section
- `worldTiles` / `connectTile` — the "My World" verb-tile grid
- `contactEmail` — the address behind "Write to me" and the footer link
- `socials` — social media links

The About bio and the pull-quote are inline in
[`src/app/page.tsx`](src/app/page.tsx).

Design tokens (colors, fonts, radius) are in
[`tailwind.config.ts`](tailwind.config.ts).
