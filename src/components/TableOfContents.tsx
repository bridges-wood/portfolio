import { useIsMobile } from '@hooks'
import { styled } from '@nextui-org/react'
import { Heading } from '@utils/headings'
import { FC } from 'react'

interface TableOfContentsProps {
	headings: Heading[]
}

const TableOfContentsContainer = styled('div', {
	position: 'relative',
	pl: '1rem',
})

const ListedHeading = styled('li', {
	maxW: '100%',
	textAlign: 'left',
	':before': {
		d: 'none',
	},
	':after': {
		content: '',
		position: 'absolute',
		t: '50%',
		r: 'auto',
		l: 0,
		w: '5px',
		h: '5px',
		opacity: 0,
		br: '10px',
		bg: '$foreground',
		transform: 'translateY(14.5px) translateX(4px)',
		transition: 'opacity 0.25s ease',
	},
	'& a': {
		fontSize: '0.8rem',
		color: '$accents6',
	},
	variants: {
		active: {
			true: {
				':after': {
					opacity: 1,
				},
				'& a': {
					color: 'inherit',
				},
			},
		},
	},
})

const TableOfContents: FC<TableOfContentsProps> = ({ headings, ...props }) => {
	const isMobile = useIsMobile()
	// ! Not using useScrollSpy due to bug. See issue #15
	// const activeID = useScrollSpy(
	// 	headings.map(({ slug }) => `[id="${slug}"]`),
	// 	{
	// 		rootMargin: '0px 0px -80% 0px',
	// 	}
	// )

	if (headings.length <= 0 || isMobile) {
		return null
	}

	return (
		<TableOfContentsContainer {...props}>
			<h4>Contents</h4>
			<ul>
				{headings.map(({ slug, text }, idx) => {
					return (
						<ListedHeading key={idx} active={false}>
							<a href={`#${slug}`}>{text}</a>
						</ListedHeading>
					)
				})}
			</ul>
		</TableOfContentsContainer>
	)
}

export default TableOfContents
