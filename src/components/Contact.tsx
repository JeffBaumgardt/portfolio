import { profile } from "@/data/profile"

export default function Contact() {
	return (
		<section
			id="contact"
			className="scroll-mt-24 border-t border-[var(--line)] py-20 sm:py-28"
			aria-labelledby="contact-heading"
		>
			<div className="relative mx-auto w-full max-w-6xl overflow-hidden px-5 sm:px-8">
				<div
					className="absolute inset-0 rounded-sm bg-[linear-gradient(135deg,rgba(94,228,200,0.12),transparent_45%,rgba(240,198,116,0.08))]"
					aria-hidden="true"
				/>
				<div className="relative rounded-sm border border-[var(--line)] bg-[var(--panel)]/60 px-6 py-12 sm:px-12 sm:py-16">
					<p className="font-mono-label text-xs tracking-[0.2em] text-[var(--signal)] uppercase">Contact</p>
					<h2
						id="contact-heading"
						className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[var(--paper)] sm:text-5xl"
					>
						Let&apos;s talk about the role you&apos;re hiring for
					</h2>
					<p className="mt-4 max-w-lg text-base leading-7 text-[var(--muted)]">
						Open to senior frontend and full-stack roles. Happy to walk recruiters through any live demo above.
					</p>

					<div className="mt-10 flex flex-wrap gap-3">
						<a
							href={`mailto:${profile.email}`}
							className="focus-ring inline-flex items-center rounded-sm bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--void)] transition hover:brightness-110"
						>
							{profile.email}
						</a>
						<a
							href={profile.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="focus-ring inline-flex items-center rounded-sm border border-[var(--line-strong)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-white/5"
							aria-label="LinkedIn profile (opens in new tab)"
						>
							LinkedIn ↗
						</a>
						<a
							href={profile.github}
							target="_blank"
							rel="noopener noreferrer"
							className="focus-ring inline-flex items-center rounded-sm border border-[var(--line-strong)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-white/5"
							aria-label="GitHub profile (opens in new tab)"
						>
							GitHub ↗
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
