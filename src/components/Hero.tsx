import Image from "next/image"

import { profile } from "@/data/profile"
import { projects } from "@/data/projects"

export default function Hero() {
	const previewStack = projects.slice(0, 3)

	return (
		<section
			id="top"
			className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
			aria-labelledby="hero-brand"
		>
			<div className="mesh-grid pointer-events-none absolute inset-0" aria-hidden="true" />

			{/* Dominant full-bleed image plane */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<div className="animate-drift absolute inset-0 opacity-40">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(94,228,200,0.14),transparent_48%)]" />
					<div className="absolute -right-[12%] top-[8%] h-[70%] w-[62%] max-w-4xl overflow-hidden rounded-[2px] opacity-70 [mask-image:linear-gradient(to_left,black_20%,transparent)]">
						<Image
							src={previewStack[0].image}
							alt=""
							fill
							priority
							sizes="(max-width: 768px) 90vw, 55vw"
							className="object-cover object-top"
						/>
					</div>
					<div className="absolute bottom-[8%] left-[4%] hidden h-[38%] w-[36%] max-w-md overflow-hidden rounded-[2px] opacity-45 sm:block [mask-image:linear-gradient(to_top,black,transparent)]">
						<Image
							src={previewStack[1].image}
							alt=""
							fill
							sizes="40vw"
							className="object-cover object-top"
						/>
					</div>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-[var(--void)] via-[color-mix(in_srgb,var(--void)_55%,transparent)] to-[color-mix(in_srgb,var(--void)_35%,transparent)]" />
			</div>

			<div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
				<p className="animate-rise font-mono-label text-xs tracking-[0.22em] text-[var(--signal)] uppercase">
					{profile.location} · Available for full-time roles
				</p>

				{/* Brand is the hero signal */}
				<h1
					id="hero-brand"
					className="animate-rise delay-1 font-display mt-5 max-w-5xl text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-[var(--paper)]"
				>
					{profile.name}
				</h1>

				<p className="animate-rise delay-2 mt-6 max-w-xl text-lg font-medium text-[var(--paper)]/90 sm:text-xl">
					{profile.title}
				</p>
				<p className="animate-rise delay-3 mt-3 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg">
					{profile.tagline}
				</p>

				<div className="animate-rise delay-4 mt-10 flex flex-wrap items-center gap-3">
					<a
						href="#work"
						className="focus-ring inline-flex items-center rounded-sm bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--void)] transition hover:brightness-110"
					>
						View selected work
					</a>
					<a
						href={`mailto:${profile.email}`}
						className="focus-ring inline-flex items-center rounded-sm border border-[var(--line-strong)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--paper)] transition hover:border-[var(--paper)]/40 hover:bg-white/5"
					>
						Get in touch
					</a>
				</div>

				<ul
					className="animate-fade delay-5 mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--line)] pt-6"
					aria-label="Core stack"
				>
					{profile.competencies.slice(0, 8).map((skill) => (
						<li
							key={skill}
							className="font-mono-label text-xs tracking-[0.12em] text-[var(--muted)] uppercase"
						>
							{skill}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
