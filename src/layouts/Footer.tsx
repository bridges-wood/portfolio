import { Github, Gmail, LinkedIn } from '@components/icons'
import { Container, CSS, Row, Text, useTheme } from '@nextui-org/react'
import { FC } from 'react'

export interface FooterProps {
	css?: CSS
	containerCss?: CSS
}

const Footer: FC<FooterProps> = ({ css, containerCss }) => {
	const { theme } = useTheme()
	const year = new Date().getFullYear()

	return (
		<Container
			fluid
			className='footer__container'
			gap={2}
			css={{
				zIndex: '$1',
				padding: '$md $sm',
				'@xsMax': {
					padding: '$sm $xs',
				},
				...containerCss,
			}}
			as='footer'
		>
			<Row justify='center' css={css}>
				<Github
					fill={theme.colors.foreground.value}
					css={{
						ml: 'calc($xs / 2)',
						mr: 'calc($xs / 2)',
					}}
				/>
				<LinkedIn
					fill={theme.colors.foreground.value}
					css={{
						ml: 'calc($xs / 2)',
						mr: 'calc($xs / 2)',
					}}
				/>
				<Gmail
					fill={theme.colors.foreground.value}
					css={{
						ml: 'calc($xs / 2)',
						mr: 'calc($xs / 2)',
					}}
				/>
			</Row>
			<Row justify='flex-end' css={css}>
				<Text
					span
					className='footer__text'
					css={{
						fontSize: '$xs',
						color: '$accents6',
						'@mdMax': {
							fontSize: '$xs',
						},
					}}
				>
					&copy;&nbsp;Max&nbsp;Wood&nbsp;{year}
				</Text>
			</Row>
		</Container>
	)
}

export default Footer
