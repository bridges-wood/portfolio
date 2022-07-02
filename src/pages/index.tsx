import GradientRect, { Gradient } from '@components/GradientRect'
import { Container, Row, styled, Text } from '@nextui-org/react'

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

const PaddedRow = styled(Row, {
	padding: '0.2em 0 0.2em 0',
})

export default function Home() {
	return (
		<Container
			css={{
				marginRight: 'auto',
				height: 'min-content',
			}}
		>
			<PaddedRow>
				<GradientRect {...{ ...BlueToGreen, length: 90 }} />
				<GradientRect {...{ ...YellowToOrange, length: 50 }} />
				<GradientRect {...{ ...Grey, length: 12 }} />
			</PaddedRow>
			<PaddedRow>
				<GradientRect {...{ ...PurpleToRed, length: 100 }} />
			</PaddedRow>
			<PaddedRow>
				<GradientRect {...{ ...YellowToOrange, length: 40 }} />
				<GradientRect {...{ ...Grey, length: 12 }} />
				<GradientRect {...{ ...Grey, length: 30 }} />
				<GradientRect {...{ ...YellowToOrange, length: 70 }} />
			</PaddedRow>
			<Container
				css={{
					paddingLeft: '0',
					marginLeft: '-0.02em',
					paddingRight: '0',
				}}
			>
				<Text h1>Max Wood</Text>
				<Text>Student and freelance web-developer.</Text>
			</Container>
			<PaddedRow>
				<GradientRect {...{ ...Grey, length: 100 }} />
				<GradientRect {...{ ...BlueToGreen, length: 50 }} />
			</PaddedRow>
			<PaddedRow>
				<GradientRect {...{ ...BlueToGreen, length: 60 }} />
				<GradientRect {...{ ...YellowToOrange, length: 35 }} />
				<GradientRect {...{ ...BlueToGreen, length: 150 }} />
			</PaddedRow>
			<PaddedRow />
			<PaddedRow>
				<GradientRect {...{ ...PurpleToRed, length: 70 }} />
			</PaddedRow>
		</Container>
	)
}
