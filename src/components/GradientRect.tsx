import { keyframes, styled } from '@nextui-org/react'
import { FC } from 'react'

const Pill = styled('rect', {
	h: '12px',
	br: '$pill',
	mr: '6px',
})

export interface GradientRectProps {
	start: string
	end?: string
	width?: number
}

const GradientPill: FC<GradientRectProps> = ({ start, end, width = 100 }) => {
	const toPill = keyframes({
		'0%': {
			w: '12px',
		},
		'100%': {
			w: `${width}px`,
		},
	})

	if (!end) end = start

	return (
		<Pill
			css={{
				w: `${width}px`,
				background: `linear-gradient(to right, ${start}, ${end})`,
				animation: `${toPill} 2s ease-in-out`,
				willChange: 'width',
			}}
		/>
	)
}

export default GradientPill
