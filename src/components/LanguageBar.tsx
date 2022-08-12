import colors from '@json/colors'
import { CSS, styled } from '@nextui-org/react'
import type { GithubProject } from '@typings/api/Projects'
import { FC } from 'react'

interface LanguageBarProps extends Pick<GithubProject, 'languages'> {
	css?: CSS
}

const LanguageBarContainer = styled('span', {
	d: 'flex',
	overflow: 'hidden',
	w: '100%',
	h: '6px',
	br: '$pill',
	m: '$4 0',
})

const LanguageBar: FC<LanguageBarProps> = ({ languages, css }) => {
	const totalBytes = Object.values(languages).reduce(
		(total, bytes) => (total += bytes)
	)

	return (
		<LanguageBarContainer css={css}>
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
		</LanguageBarContainer>
	)
}

export default LanguageBar
