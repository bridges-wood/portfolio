import { styled } from '@nextui-org/react'
import { FC } from 'react'

export interface MenuToggleProps {
	expanded: boolean
}

const Line = styled('div', {
	height: '1px',
	width: '22px',
	backgroundColor: '$foreground',
	transition: 'transform 0.15s ease',
})

const MenuToggle: FC<MenuToggleProps> = ({ expanded }) => {
	return (
		<div
			aria-label={expanded ? 'Close menu' : 'Open menu'}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				pointerEvents: 'none',
			}}
		>
			<Line
				css={{
					transform: expanded
						? 'translateY(1px) rotate(45deg)'
						: 'translateY(8px)',
				}}
			/>
			<Line
				css={{
					transform: expanded ? 'scaleX(0)' : 'translateY(0)',
				}}
			/>
			<Line
				css={{
					transform: expanded
						? 'translateY(0px) rotate(-45deg)'
						: 'translateY(-8px)',
				}}
			/>
		</div>
	)
}

export default MenuToggle
