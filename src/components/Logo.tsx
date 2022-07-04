import { CSS, Image } from '@nextui-org/react'
import { FC } from 'react'

export interface LogoProps {
	auto?: boolean
	size?: number
	width?: number
	height?: number
	small?: boolean
	className?: string
	css?: CSS
	containerCSS?: CSS
}

const Logo: FC<LogoProps> = ({
	auto,
	size,
	width,
	height,
	small,
	className,
	css,
	containerCSS,
}) => {
	return (
		<Image
			src='/images/logo.png'
			alt='Max Wood'
			className={className}
			css={css}
			containerCss={containerCSS}
		/>
	)
}

export default Logo
