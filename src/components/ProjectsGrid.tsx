import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export default function ProjectsGrid() {
	return (
		<section id="work" className="scroll-mt-24 border-t border-[var(--line)] py-20 sm:py-28" aria-labelledby="work-heading">
			<div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
				<div className="max-w-2xl">
					<p className="font-mono-label text-xs tracking-[0.2em] text-[var(--signal)] uppercase">Selected work</p>
					<h2
						id="work-heading"
						className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--paper)] sm:text-4xl"
					>
						Product surfaces that show how I ship
					</h2>
					<p className="mt-3 text-base leading-7 text-[var(--muted)]">
						Each card opens the live deploy. Use case tags highlight the skill story recruiters scan for — payments,
						auth, real-time, AI, and API design.
					</p>
				</div>

				<ul className="mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<li key={project.id} className="animate-rise h-full" style={{ animationDelay: `${0.06 * index}s` }}>
							<ProjectCard project={project} index={index} />
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
