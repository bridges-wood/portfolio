import { GithubProject } from '@typings/api/Projects'
import React from 'react'

interface ComponentProps {
	project: GithubProject
}

const Project = ({ project }: ComponentProps) => {
	return (
		<div className='project'>
			<h3>
				<a href={project.url}>{project.name}</a>
			</h3>
			<p>{project.description}</p>
			<hr />
			<small>{project.mainLanguage}</small>
		</div>
	)
}

export default Project
