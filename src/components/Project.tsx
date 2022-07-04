import LanguageBar from '@components/LanguageBar'
import colors from '@json/colors'
import type { GithubProject } from '@typings/api/Projects'
import { FC } from 'react'

interface ProjectProps {
	project: GithubProject
}

const Project: FC<ProjectProps> = ({ project }) => {
	const totalBytes = Object.values(project.languages).reduce(
		(total, bytes) => (total += bytes)
	)

	return (
		<div className='project'>
			<h5>
				{project.private ? (
					<span>
						{project.name} -{' '}
						<span className='color-text-secondary'>Private</span>
					</span>
				) : (
					<a href={project.url} className='link'>
						{project.name}
					</a>
				)}
			</h5>
			<span>{project.description}</span>
			<hr />
			<LanguageBar languages={project.languages} />
			<ul className='languageBreakdown'>
				{Object.entries(project.languages).map(([language, bytes]) => (
					<li key={language} className='text-small'>
						<svg
							viewBox='0 0 16 16'
							height='16'
							width='16'
							fill={colors.filter((spec) => spec.name === language)[0]?.color}
						>
							<circle cx='50%' cy='55%' r='25%' />
						</svg>
						<span className='text-bold'>{language}</span>
						<span className='color-text-secondary'>
							{((bytes / totalBytes) * 100).toFixed(1)}%
						</span>
					</li>
				))}
			</ul>
			{project.website_url ? (
				<>
					<hr />
					<small>
						See it{' '}
						<a className='link' href={project.website_url}>
							here
						</a>
					</small>
				</>
			) : null}
		</div>
	)
}

export default Project
