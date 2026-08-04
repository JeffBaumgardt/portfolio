import { profile } from "@/data/profile"

const nav = [
	{ href: "#work", label: "Work" },
	{ href: "#about", label: "About" },
	{ href: "#experience", label: "Experience" },
	{ href: "#contact", label: "Contact" },
] as const

export default function SiteHeader() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--void)_72%,transparent)] backdrop-blur-md">
			<div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
				<a
					href="#top"
					className="focus-ring rounded-sm font-display text-sm font-semibold tracking-[0.08em] text-[var(--paper)] uppercase"
					aria-label={`${profile.name} — back to top`}
				>
					{profile.name}
				</a>
				<nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="focus-ring rounded-sm px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--paper)]"
						>
							{item.label}
						</a>
					))}
				</nav>
				<div className="flex items-center gap-2">
					<a
						href={profile.github}
						target="_blank"
						rel="noopener noreferrer"
						className="focus-ring hidden rounded-sm px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--paper)] sm:inline-flex"
						aria-label="GitHub profile (opens in new tab)"
					>
						GitHub
					</a>
					<a
						href={`mailto:${profile.email}`}
						className="focus-ring inline-flex items-center rounded-sm bg-[var(--paper)] px-3.5 py-2 text-sm font-semibold text-[var(--void)] transition hover:bg-white"
						aria-label="Email Jeff"
					>
						Hire me
					</a>
				</div>
			</div>
			{/* Mobile jump links */}
			<nav
				className="flex gap-1 overflow-x-auto border-t border-[var(--line)] px-5 py-2 md:hidden"
				aria-label="Section navigation"
			>
				{nav.map((item) => (
					<a
						key={item.href}
						href={item.href}
						className="focus-ring shrink-0 rounded-sm px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
					>
						{item.label}
					</a>
				))}
			</nav>
		</header>
	)
}
