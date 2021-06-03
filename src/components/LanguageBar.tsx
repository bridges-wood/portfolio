import colors from '@json/colors'
import { GithubProject } from '@typings/api/Projects'
import React from 'react'

interface ComponentProps extends Pick<GithubProject, 'languages'> {}

const LanguageBar = ({ languages }: ComponentProps) => {
	const totalBytes = Object.values(languages).reduce(
		(total, bytes) => (total += bytes)
	)

	return (
		<span className='languageBar'>
			{Object.entries(languages).map(([language, bytes]) => (
				<span
					key={language}
					style={{
						width: `${(bytes / totalBytes) * 100}%`,
						backgroundColor:
							colors.filter((spec) => spec.name === language)[0]?.color ||
							'#000000',
					}}
				/>
			))}
		</span>
	)
}

export default LanguageBar
