import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export default function HomePage() {
	return (
		<>
			<SiteHeader />
			<main className="flex-1">
				<Hero />
				<ProjectsGrid />
				<About />
				<Experience />
				<Contact />
			</main>
			<SiteFooter />
		</>
	)
}
