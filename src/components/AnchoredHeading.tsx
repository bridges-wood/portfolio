import LinkSolid from '@components/svg/link-solid.svg'
import Text from '@nextui-org/react/text'
import React from 'react'

export interface ComponentProps {
	level: number
	children?: React.ReactNode
}

/**
 * Generate an anchor from the first text node of a ReactNode.
 *
 * @param text The text node to generate an anchor from.
 * @returns An anchor string.
 */
const getAnchor = (text: string) => {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9 ]/g, '')
		.replace(/[ ]/g, '-')
}

const AnchoredHeading = ({ level, children }) => {
	const anchor = getAnchor(children)
	const link = `#${anchor}`

	switch (level) {
		case 1:
			return (
				<Text h1 id={anchor}>
					<a href={link} className='anchor-link'>
						{LinkSolid()}
					</a>
					{children}
				</Text>
			)
		case 2:
			return (
				<Text h2 id={anchor}>
					<a href={link} className='anchor-link'>
						{LinkSolid()}
					</a>
					{children}
				</Text>
			)
		case 3:
			return (
				<Text h3 id={anchor}>
					<a href={link} className='anchor-link'>
						{LinkSolid()}
					</a>
					{children}
				</Text>
			)
		case 4:
			return (
				<Text h4 id={anchor}>
					<a href={link} className='anchor-link'>
						{LinkSolid()}
					</a>
					{children}
				</Text>
			)
		case 5:
			return (
				<Text h5 id={anchor}>
					<a href={link} className='anchor-link'>
						{LinkSolid()}
					</a>
					{children}
				</Text>
			)
		case 6:
			return (
				<Text h6 id={anchor}>
					<a href={link} className='anchor-link'>
						{LinkSolid()}
					</a>
					{children}
				</Text>
			)
		default:
			return (
				<Text h1 id={anchor}>
					<a href={link} className='anchor-link'>
						{LinkSolid()}
					</a>
					{children}
				</Text>
			)
	}
}

export default AnchoredHeading
