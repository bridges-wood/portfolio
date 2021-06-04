import FeaturedProjectPreview from '@components/FeaturedProjectPreview'
import Project from '@components/Project'
import featuredProjects from '@json/featuredProjects'
import { GithubProject } from '@typings/api/Projects'
import fetchProjects from '@utils/repos'
import { GetStaticProps } from 'next'
import React from 'react'
import Slider from 'react-slick'

interface PageProps {
	projects: GithubProject[]
	featured: any[]
}

// TODO change orientation page in landscape mode

const Projects = ({ projects, featured }: PageProps) => {
	return (
		<div>
			<h2>Projects</h2>
			<p>
				A sample of some of the projects that I've worked on for personal
				projects, assignments and on freelance.
			</p>
			<div className='projects'>
				{featured.map((project) => (
					<FeaturedProjectPreview key={project.title} project={project} />
				))}
				<hr />
				<Slider infinite slidesToShow={1} slidesToScroll={1} speed={500}>
					{projects.map((project) => (
						<Project key={project.id} project={project} />
					))}
				</Slider>
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const projects = await fetchProjects()
	return {
		props: { projects, featured: featuredProjects },
	}
}

export default Projects
