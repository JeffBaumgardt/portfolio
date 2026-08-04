import { profile } from "@/data/profile"

export default function About() {
	return (
		<section
			id="about"
			className="scroll-mt-24 border-t border-[var(--line)] py-20 sm:py-28"
			aria-labelledby="about-heading"
		>
			<div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
				<div>
					<p className="font-mono-label text-xs tracking-[0.2em] text-[var(--signal)] uppercase">About</p>
					<h2
						id="about-heading"
						className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--paper)] sm:text-4xl"
					>
						Senior engineer who still owns the details
					</h2>
					<p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">{profile.summary}</p>
				</div>

				<ul className="space-y-5" aria-label="Highlights">
					{profile.highlights.map((item) => (
						<li
							key={item}
							className="border-l-2 border-[var(--signal)]/50 pl-4 text-sm leading-6 text-[var(--paper)]/90"
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
