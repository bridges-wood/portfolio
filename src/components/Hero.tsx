import GradientPill from '@components/GradientRect'
import { Container, Row, styled, Text } from '@nextui-org/react'
import { FC } from 'react'

const PaddedRow = styled(Row, {
	width: '100%',
	padding: '0.2em 0 0.2em 0',
})

const Hero: FC = () => {
	return (
		<Container
			lg
			className='hero__wrapper'
			gap={0}
			as='section'
			display='grid'
			css={{
				position: 'relative',
				height: 'calc(84vh - 76px)',
				'@xsMax': {
					height: 'calc(100vh - 64px)',
				},
				placeItems: 'center',
			}}
		>
			<Container className='hero__container'>
				<PaddedRow>
					<GradientPill width={90} start='#42ddf5' end='#12e652' />
					<GradientPill width={50} start='#f0e335' end='#e68a22' />
					<GradientPill width={12} start='#555' />
				</PaddedRow>
				<PaddedRow>
					<GradientPill width={100} start='#b517d1' end='#e31717' />
				</PaddedRow>
				<PaddedRow>
					<GradientPill width={40} start='#f0e335' end='#e68a22' />
					<GradientPill width={12} start='#555' />
					<GradientPill width={30} start='#555' />
					<GradientPill width={70} start='#f0e335' end='#e68a22' />
				</PaddedRow>
				<Container
					css={{
						paddingLeft: '0',
						marginLeft: '-0.02em',
						paddingRight: '0',
					}}
				>
					<Text h1>Max Wood</Text>
					<Text>Student and freelance developer.</Text>
				</Container>
				<PaddedRow>
					<GradientPill width={100} start='#555' />
					<GradientPill width={50} start='#42ddf5' end='#12e652' />
				</PaddedRow>
				<PaddedRow>
					<GradientPill width={60} start='#42ddf5' end='#12e652' />
					<GradientPill width={35} start='#f0e335' end='#e68a22' />
					<GradientPill width={150} start='#42ddf5' end='#12e652' />
				</PaddedRow>

				<PaddedRow>
					<GradientPill width={70} start='#b517d1' end='#e31717' />
				</PaddedRow>
			</Container>
		</Container>
	)
}

export default Hero
