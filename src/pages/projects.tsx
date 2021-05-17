import Project from '@components/Project'
import { GithubProject } from '@typings/api/Projects'
import fetchProjects from '@utils/repos'
import { GetStaticProps } from 'next'
import React from 'react'

interface PageProps {
	projects: GithubProject[]
}

const Projects = ({ projects }: PageProps) => {
	return (
		<div className='projects'>
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</div>
	)
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const projects = await fetchProjects()
	return {
		props: { projects },
	}
}

export default Projects
