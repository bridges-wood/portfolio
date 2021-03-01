import React from 'react'
import GradientRect, { Gradient } from '../components/GradientRect'

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
		<div className='main'>
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
				<p>
					Full-time student, self-teaching fullstack web development and game
					development on the side.
				</p>
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
	)
}
