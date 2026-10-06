# Jeff Baumgardt — Portfolio

Recruiter-facing portfolio for [Jeff Baumgardt](https://github.com/jeffbaumgardt) — senior full-stack engineer (React, Next.js, TypeScript).

**Live:** [https://portfolio-eight-navy-22.vercel.app](https://portfolio-eight-navy-22.vercel.app)

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Vercel deploy target

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project cards

Each card links to a live Vercel (or production) deploy. GitHub repos are secondary links. Marketing images live under `public/projects/`.

| Project        | Use case            | Live                                              |
|----------------|---------------------|---------------------------------------------------|
| Till & Ticket  | Payments            | https://till-and-ticket.vercel.app                |
| Pulseboard     | Authentication      | https://pulseboard-eight-kappa.vercel.app         |
| Ledgerline     | Testing & CI        | https://ledgerline-wheat-one.vercel.app           |
| Harborline     | Real-time (SSE)     | https://harborline-eosin.vercel.app               |
| Oak & Ember    | LLM product support | https://oak-and-ember-beta.vercel.app             |
| Vinyl Archive  | CRUD API            | https://vinyl-archive-khaki.vercel.app            |

Update copy, stack tags, and URLs in `src/data/projects.ts` and `src/data/profile.ts`.

## Deploy

GitHub is connected to Vercel — pushes to `master` redeploy production.

Custom domain can be attached later in the Vercel project settings.
