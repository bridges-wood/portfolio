import GradientRect, { Gradient } from '@components/GradientRect'
import React from 'react'

const BlueToGreen: Gradient = {
	start: '#42ddf5',
	end: '#12e652',
}

const YellowToOrange: Gradient = {
	start: '#f0e335',
	end: '#e68a22',
}

const Grey: Gradient = {
	start: '#555555',
	end: '#555555',
}

const PurpleToRed = {
	start: '#b517d1',
	end: '#e31717',
}

export default function Home() {
	return (
		<div className='container'>
			<div className='bio'>
				<div>
					<GradientRect {...{ ...BlueToGreen, length: 90 }} />
					<GradientRect {...{ ...YellowToOrange, length: 50 }} />
					<GradientRect {...{ ...Grey, length: 12 }} />
				</div>
				<div>
					<GradientRect {...{ ...PurpleToRed, length: 100 }} />
				</div>
				<div>
					<GradientRect {...{ ...YellowToOrange, length: 40 }} />
					<GradientRect {...{ ...Grey, length: 12 }} />
					<GradientRect {...{ ...Grey, length: 30 }} />
					<GradientRect {...{ ...YellowToOrange, length: 70 }} />
				</div>
				<div>
					<h1>Max Wood</h1>
					<p>Student and freelance web-developer.</p>
				</div>
				<div>
					<GradientRect {...{ ...Grey, length: 100 }} />
					<GradientRect {...{ ...BlueToGreen, length: 50 }} />
				</div>
				<div>
					<GradientRect {...{ ...BlueToGreen, length: 60 }} />
					<GradientRect {...{ ...YellowToOrange, length: 35 }} />
					<GradientRect {...{ ...BlueToGreen, length: 150 }} />
				</div>
				<div />
				<div>
					<GradientRect {...{ ...PurpleToRed, length: 70 }} />
				</div>
			</div>
		</div>
	)
}
