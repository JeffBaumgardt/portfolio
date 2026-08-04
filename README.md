# Jeff Baumgardt — Portfolio

Recruiter-facing portfolio for [Jeff Baumgardt](https://github.com/jeffbaumgardt) — senior full-stack engineer (React, Next.js, TypeScript).

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

| Project        | Use case           | Live                                              |
|----------------|--------------------|---------------------------------------------------|
| TradingAgents  | Multi-agent AI     | https://trading-agents.bugfoot.net                |
| Till & Ticket  | Payments           | https://till-and-ticket.vercel.app                |
| Pulseboard     | Authentication     | https://pulseboard-eight-kappa.vercel.app         |
| Harborline     | Real-time          | https://harborline.vercel.app                     |
| Oak & Ember    | LLM product support| https://oak-and-ember.vercel.app                  |
| Vinyl Archive  | CRUD API           | https://vinyl-archive.vercel.app                  |

Update copy, stack tags, and URLs in `src/data/projects.ts` and `src/data/profile.ts`.

## Deploy

```bash
pnpm build
# or link + deploy with Vercel CLI / GitHub integration
```

Custom domain can be attached later in the Vercel project settings.
