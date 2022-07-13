import { CSS, styled } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

export interface FixedProps {
	offset?: number
	shadow?: boolean
	className?: string
	css?: CSS
}

const StyledFixed = styled('div', {
	bg: 'transparent',
	position: 'fixed',
	zIndex: '$max',
	variants: {
		shadow: {
			true: {
				bs: '$sm',
			},
		},
	},
})

const Fixed: FC<PropsWithChildren<FixedProps>> = ({
	offset = 0,
	children,
	shadow = false,
	className = '',
	css,
}) => (
	<StyledFixed
		css={{ ...css, top: offset }}
		className={className}
		shadow={shadow}
	>
		{children}
	</StyledFixed>
)

export default Fixed
