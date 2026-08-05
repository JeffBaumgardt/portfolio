export type Project = {
	id: string
	name: string
	useCase: string
	description: string
	stack: string[]
	image: string
	imageAlt: string
	liveUrl: string
	repoUrl: string
	featured?: boolean
}

/**
 * Live URLs from the jeffbaumgardts-projects Vercel team (production aliases).
 * Prefer team-project domains over bare project names — several short names
 * collide with unrelated apps on the Vercel network.
 */
export const projects: Project[] = [
	{
		id: "trading-agents",
		name: "TradingAgents",
		useCase: "Multi-agent AI",
		description:
			"LLM trading desk: specialized agents debate markets, risk, and portfolio decisions in a live Next.js UI.",
		stack: ["Next.js", "Clerk", "Stripe", "LangGraph", "Railway", "Supabase"],
		image: "/projects/trading-agents.png",
		imageAlt: "TradingAgents multi-agent trading platform marketing visual",
		liveUrl: "https://trading-agents.bugfoot.net",
		repoUrl: "https://github.com/JeffBaumgardt/TradingAgents",
		featured: true,
	},
	{
		id: "till-and-ticket",
		name: "Till & Ticket",
		useCase: "Payments",
		description:
			"Venue booking with Stripe Checkout, webhooks, idempotency, and inventory that stays correct mid-checkout.",
		stack: ["Next.js", "Stripe", "Clerk", "Supabase", "Zod", "Server Actions"],
		image: "/projects/till-and-ticket.png",
		imageAlt: "Till & Ticket Harbor Room booking app marketing visual",
		liveUrl: "https://till-and-ticket.vercel.app",
		repoUrl: "https://github.com/JeffBaumgardt/till-and-ticket",
		featured: true,
	},
	{
		id: "pulseboard",
		name: "Pulseboard",
		useCase: "Authentication",
		description:
			"Multi-tenant workspace with real orgs, RBAC, boards, and Postgres-backed cards — not fake session CRUD.",
		stack: ["Next.js", "Clerk", "Supabase", "Postgres", "dnd-kit", "Zod"],
		image: "/projects/pulseboard.png",
		imageAlt: "Pulseboard multi-tenant team workspace marketing visual",
		liveUrl: "https://pulseboard-eight-kappa.vercel.app",
		repoUrl: "https://github.com/JeffBaumgardt/pulseboard",
		featured: true,
	},
	{
		id: "ledgerline",
		name: "Ledgerline",
		useCase: "Testing & CI",
		description:
			"Invoice and expense tracker with integer-cents money, CSV export, Vitest + Playwright, and public HTML CI reports.",
		stack: ["Next.js", "Clerk", "Supabase", "Vitest", "Playwright", "TanStack Table"],
		image: "/projects/ledgerline.png",
		imageAlt: "Ledgerline invoices and expenses marketing visual",
		liveUrl: "https://ledgerline-wheat-one.vercel.app",
		repoUrl: "https://github.com/JeffBaumgardt/ledgerline",
		featured: true,
	},
	{
		id: "harborline",
		name: "Harborline",
		useCase: "Real-time",
		description:
			"Logistics facility ops board driven by a Server-Sent Events simulation — live stages, KPIs, and charts.",
		stack: ["Next.js", "SSE", "EventSource", "Recharts", "Zod", "TypeScript"],
		image: "/projects/harborline.png",
		imageAlt: "Harborline live logistics dashboard marketing visual",
		liveUrl: "https://harborline-eosin.vercel.app",
		repoUrl: "https://github.com/JeffBaumgardt/harborline",
	},
	{
		id: "oak-and-ember",
		name: "Oak & Ember",
		useCase: "LLM product support",
		description:
			"Cast-iron shopfront with Ember — an Anthropic-powered support agent embedded in the product surface.",
		stack: ["Next.js", "Anthropic SDK", "Zod", "Streaming chat", "Tailwind"],
		image: "/projects/oak-and-ember.png",
		imageAlt: "Oak & Ember cast-iron shop with AI support marketing visual",
		liveUrl: "https://oak-and-ember-beta.vercel.app",
		repoUrl: "https://github.com/JeffBaumgardt/oak-and-ember",
	},
	{
		id: "vinyl-archive",
		name: "Vinyl Archive",
		useCase: "CRUD API",
		description:
			"Session-scoped record shelf — Server Actions and REST routes with Zod validation and polished UX.",
		stack: ["Next.js", "Server Actions", "REST API", "Zod", "TypeScript"],
		image: "/projects/vinyl-archive.png",
		imageAlt: "Vinyl Archive CRUD collection marketing visual",
		liveUrl: "https://vinyl-archive-khaki.vercel.app",
		repoUrl: "https://github.com/JeffBaumgardt/vinyl-archive",
	},
]
