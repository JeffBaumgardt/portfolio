import { profile } from "@/data/profile"

export default function SiteFooter() {
	const year = new Date().getFullYear()

	return (
		<footer className="border-t border-[var(--line)] py-8">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
				<p>
					© {year} {profile.name}
				</p>
				<p className="font-mono-label text-xs tracking-[0.12em] uppercase">
					{profile.location} · Built with Next.js
				</p>
			</div>
		</footer>
	)
}
