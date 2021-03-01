import React, { CSSProperties }  from 'react'

export interface Gradient {
	start: string, 
	end: string, 
	length?: number
}

const GradientRect = (params: Gradient) => {
	const {start, end, length} = params
	const height: number = 12
	const style: CSSProperties = {
		height: `${height}px`,
		width: `${length}px`,
		borderRadius: `${height / 2}px`,
		marginRight: `${height / 2}px`
	}

	return (
	<svg style={style}>
				<linearGradient id={start + end} x1='0%' y1='0%' x2='100%' y2='0%'>
					<stop offset='0%' style={{
						stopColor: start,
						stopOpacity: 1
					}} />
					<stop offset='100%' style={{
						stopColor: end,
						stopOpacity: 1
					}} />
				</linearGradient>
				<rect style={style} fill={`url(#${start + end})`}/>
			</svg>
)}

export default GradientRect