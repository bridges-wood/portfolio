import { CSSProperties, FC } from 'react'

export interface GradientRectProps {
	start: string
	end: string
	length?: number
}

const GradientRect: FC<GradientRectProps> = ({ start, end, length = 100 }) => {
	const height: number = 12
	const style: CSSProperties = {
		height: `${height}px`,
		width: `${length}px`,
		borderRadius: `${height / 2}px`,
		marginRight: `${height / 2}px`,
	}

	return (
		<svg style={style}>
			<defs>
				<linearGradient
					id={`grad${start}${end}`}
					x1='0%'
					y1='0%'
					x2='100%'
					y2='0%'
				>
					<stop offset='0%' stopColor={start} stopOpacity={1} />
					<stop offset='100%' stopColor={end} stopOpacity={1} />
				</linearGradient>
			</defs>

			<rect style={style} fill={`url(#grad${start}${end})`} />
		</svg>
	)
}

export default GradientRect
