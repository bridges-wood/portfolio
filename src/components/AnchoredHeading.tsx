import { Link } from '@components/icons'
import { slugify } from '@lib/posts'
import { styled, Text, useTheme } from '@nextui-org/react'
import React, { FC } from 'react'

export interface AnchoredHeadingProps {
	h1?: boolean
	h2?: boolean
	h3?: boolean
	h4?: boolean
	h5?: boolean
	h6?: boolean
	children?: React.ReactNode
}

/**
 * Generate an anchor from the first text node of a ReactNode.
 *
 * @param text The text node to generate an anchor from.
 * @returns An anchor string.
 */
const getAnchor = (text: string) => {
	return slugify(text)
}

const AnchorLink = styled('a', {
	opacity: 0.2,
	position: 'absolute',
	transform: 'translateX(-1em) translateY(0.15em)',
	'&:hover': {
		opacity: 1,
	},
})

const AnchorText = styled(Text, {
	scrollMarginTop: '76px',
})

const AnchoredHeading: FC<AnchoredHeadingProps> = ({ children, ...props }) => {
	const { theme } = useTheme()
	if (typeof children !== 'string') {
		throw new Error('AnchoredHeading expects a string child')
	}

	const anchor = getAnchor(children as string)
	const link = `#${anchor}`
	const calculateLinkSize = ({
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
	}: AnchoredHeadingProps): string | number => {
		if (h1) {
			return theme.fontSizes['5xl'].value
		} else if (h2) {
			return theme.fontSizes['4xl'].value
		} else if (h3) {
			return theme.fontSizes['2xl'].value
		} else if (h4) {
			return theme.fontSizes.xl.value
		} else if (h5) {
			return theme.fontSizes.lg.value
		} else if (h6) {
			return theme.fontSizes.md.value
		} else {
			return theme.fontSizes.md.value
		}
	}

	return (
		<AnchorText
			id={anchor}
			{...props}
			className='linked-heading'
			data-name={children}
		>
			<AnchorLink href={link}>
				<Link
					fill={theme.colors.accents9.value}
					size={calculateLinkSize({ ...props })}
				/>
			</AnchorLink>
			<span>{children}</span>
		</AnchorText>
	)
}

export default AnchoredHeading
