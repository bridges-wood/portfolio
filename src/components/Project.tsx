import LanguageBar from '@components/LanguageBar'
import colors from '@json/colors'
import { Card, Text } from '@nextui-org/react'
import type { GithubProject } from '@typings/api/Projects'
import { FC } from 'react'
import Circle from './icons/Circle'

interface ProjectProps {
	project: GithubProject
}

const Project: FC<ProjectProps> = ({ project }) => {
	const totalBytes = Object.values(project.languages).reduce(
		(total, bytes) => (total += bytes)
	)

	return (
		<Card
			css={{
				padding: '1rem',
			}}
		>
			<Text small className='projects__eyebrow'>
				Featured Project
			</Text>
			<Card.Header>
				<Text h5>{project.name}</Text>
			</Card.Header>
			<Card.Body>
				<Text span>{project.description}</Text>
				<hr />
				<LanguageBar languages={project.languages} />
				<ul className='languageBreakdown'>
					{Object.entries(project.languages).map(([language, bytes]) => (
						<li key={language} className='text-small'>
							<Circle
								fill={colors.filter((spec) => spec.name === language)[0]?.color}
							/>
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
			</Card.Body>
		</Card>
	)
}

export default Project
