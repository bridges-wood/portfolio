import { CSS, styled } from '@nextui-org/react'

export interface IconProps {
	width?: number | string
	height?: number | string
	size?: number | string
	fill?: string
	className?: string
	css?: CSS
}

export const Icon = styled('svg')

export { default as Circle } from './Circle'
export { default as Github } from './Github'
export { default as Gmail } from './Gmail'
export { default as Link } from './Link'
export { default as LinkedIn } from './LinkedIn'
