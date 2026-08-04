export const profile = {
	name: "Jeff Baumgardt",
	title: "Senior Full-Stack Engineer",
	location: "Denver, CO",
	email: "medros1455@gmail.com",
	phone: "+1-303-902-9090",
	linkedin: "https://www.linkedin.com/in/jeffbaumgardt",
	github: "https://github.com/jeffbaumgardt",
	tagline:
		"15+ years shipping product-grade React and Next.js systems across FinTech, AI, and ops.",
	summary:
		"I build production web applications end-to-end — interfaces people trust, APIs that hold under load, and demos that prove the hard parts: auth, payments, multi-tenant boundaries, real-time data, and LLM-backed product surfaces.",
	highlights: [
		"Sole frontend engineer on a FinTech platform managing $167M+ card spend",
		"Greenfield SaaS from Figma to production across AI, LegalTech, and FinTech",
		"React Denver lead organizer since 2015 — mentoring and speaking across the community",
	],
	competencies: [
		"React",
		"Next.js",
		"TypeScript",
		"Node.js",
		"GraphQL",
		"PostgreSQL",
		"AWS",
		"Clerk",
		"Stripe",
		"AI / LLM integration",
	],
} as const

export const experience = [
	{
		company: "Tallied",
		role: "Senior Front-End Engineer",
		period: "2024 — 2026",
		detail:
			"Greenfield FinTech platform from Figma to production — $167M+ card spend, real-time reporting, Turborepo design system.",
	},
	{
		company: "Tempello",
		role: "Lead Front-End Engineer",
		period: "2023 — 2024",
		detail:
			"Next.js SaaS MVP for AI-powered legal billing — component architecture, GraphQL/Hasura, performance ownership.",
	},
	{
		company: "DataRobot",
		role: "Senior Front-End Developer",
		period: "2023",
		detail:
			"External database connector widget linking customer datasets to ML models for inference.",
	},
	{
		company: "Plainsight",
		role: "Senior Front-End Developer",
		period: "2019 — 2023",
		detail:
			"In-browser auto-labeling for computer vision — dashboard, upload pipeline, live inference, CI/CD on Kubernetes.",
	},
	{
		company: "OpenText",
		role: "Senior Front-End Developer",
		period: "2012 — 2019",
		detail:
			"Enterprise e-discovery at scale — document viewers, review management, admin suite for 1,000 concurrent reviewers.",
	},
] as const
