import colors from '@json/colors'
import type { GithubProject } from '@typings/api/Projects'
import { FC } from 'react'

type LanguageBarProps = Pick<GithubProject, 'languages'>

const LanguageBar: FC<LanguageBarProps> = ({ languages }) => {
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
