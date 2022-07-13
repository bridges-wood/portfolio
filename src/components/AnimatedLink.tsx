import { Link, LinkProps } from '@nextui-org/react'
import NextLink from 'next/link'
import { FC } from 'react'

const AnimatedLink: FC<LinkProps> = ({ children, css, href, ...props }) => (
	<NextLink href={href}>
		<Link
			href={href}
			css={{
				...css,
				position: 'relative',
				textDecoration: 'none',
				'&::before': {
					content: '',
					position: 'absolute',
					width: '100%',
					height: '2px',
					bottom: 0,
					left: 0,
					backgroundColor: 'transparent',
					transformOrigin: 'bottom right',
					transform: 'scaleX(0)',
					transition: 'transform 0.3s ease, background-color 0.3s ease',
				},
				'&:hover::before': {
					transform: 'scaleX(1)',
					borderRadius: '2px',
					backgroundColor: '$link',
					transformOrigin: 'bottom left',
				},
			}}
			{...props}
		>
			{children}
		</Link>
	</NextLink>
)

export default AnimatedLink
