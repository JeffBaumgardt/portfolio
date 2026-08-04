import Image from "next/image"

import type { Project } from "@/data/projects"

type ProjectCardProps = {
	project: Project
	index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<article
			className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--panel)]/80 transition duration-300 hover:border-[color-mix(in_srgb,var(--signal)_45%,var(--line))] hover:bg-[var(--panel)]"
			style={{ animationDelay: `${0.08 * index}s` }}
		>
			<a
				href={project.liveUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="focus-ring flex flex-1 flex-col rounded-sm"
				aria-label={`Open live demo: ${project.name} (opens in new tab)`}
			>
				<div className="relative aspect-[16/10] overflow-hidden bg-[var(--ink)]">
					<Image
						src={project.image}
						alt={project.imageAlt}
						fill
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
					/>
					<div
						className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-transparent to-transparent opacity-80"
						aria-hidden="true"
					/>
					<span className="font-mono-label absolute top-3 left-3 z-[1] rounded-sm border border-white/10 bg-black/50 px-2 py-1 text-[10px] tracking-[0.16em] text-[var(--signal)] uppercase backdrop-blur-sm">
						{project.useCase}
					</span>
				</div>

				<div className="flex flex-1 flex-col p-5 sm:p-6">
					<div className="flex items-start justify-between gap-3">
						<h3 className="font-display text-xl font-semibold tracking-tight text-[var(--paper)] sm:text-2xl">
							{project.name}
						</h3>
						<span
							className="mt-1 shrink-0 text-[var(--signal)] opacity-0 transition duration-300 group-hover:opacity-100"
							aria-hidden="true"
						>
							↗
						</span>
					</div>
					<p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">{project.description}</p>

					<ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} tech stack`}>
						{project.stack.map((tech) => (
							<li
								key={tech}
								className="rounded-sm border border-[var(--line)] bg-black/20 px-2 py-1 text-[11px] font-medium tracking-wide text-[var(--paper)]/75"
							>
								{tech}
							</li>
						))}
					</ul>

					<div className="mt-5 border-t border-[var(--line)] pt-4">
						<span className="text-xs font-medium tracking-wide text-[var(--muted)]">
							Live demo ↗
						</span>
					</div>
				</div>
			</a>

			<div className="border-t border-[var(--line)] px-5 pb-5 sm:px-6 sm:pb-6">
				<a
					href={project.repoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="focus-ring inline-flex rounded-sm pt-4 text-xs font-semibold tracking-wide text-[var(--paper)] underline-offset-4 transition hover:text-[var(--signal)] hover:underline"
					aria-label={`${project.name} GitHub repository (opens in new tab)`}
				>
					View on GitHub ↗
				</a>
			</div>
		</article>
	)
}
