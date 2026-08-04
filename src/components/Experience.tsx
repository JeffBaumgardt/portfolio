import { experience } from "@/data/profile"

export default function Experience() {
	return (
		<section
			id="experience"
			className="scroll-mt-24 border-t border-[var(--line)] py-20 sm:py-28"
			aria-labelledby="experience-heading"
		>
			<div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
				<div className="max-w-2xl">
					<p className="font-mono-label text-xs tracking-[0.2em] text-[var(--signal)] uppercase">Experience</p>
					<h2
						id="experience-heading"
						className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--paper)] sm:text-4xl"
					>
						Where I&apos;ve built at scale
					</h2>
				</div>

				<ol className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
					{experience.map((role) => (
						<li
							key={`${role.company}-${role.period}`}
							className="grid gap-3 py-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-8"
						>
							<div>
								<p className="font-display text-lg font-semibold text-[var(--paper)]">{role.company}</p>
								<p className="mt-1 text-sm text-[var(--muted)]">{role.role}</p>
								<p className="font-mono-label mt-2 text-[11px] tracking-[0.14em] text-[var(--signal)]/90 uppercase">
									{role.period}
								</p>
							</div>
							<p className="text-sm leading-7 text-[var(--muted)] sm:pt-1">{role.detail}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
