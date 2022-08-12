import { styled } from '@nextui-org/react'
import MobileNavigationWrapper from './MobileNavigationWrapper'

const MobileNavigationContainer = styled('nav', {
	position: 'fixed',
	top: '60px',
	zIndex: 1001,
	right: 0,
	left: 0,
	bottom: 0,
	display: 'block',
	margin: 0,
	width: '100%',
	height: 0,
	transition: 'height 0.25s ease',
	willChange: 'height',
	overflow: 'hidden',
	userSelect: 'none',
	variants: {
		hasNotify: {
			true: {},
			false: {},
		},
		detached: {
			true: {},
			false: {},
		},
		opened: {
			true: {
				top: '63px',
				height: 'calc(100% - 64px)',
				[`& ${MobileNavigationWrapper}`]: {
					display: 'block',
				},
			},
		},
	},
	compoundVariants: [
		{
			opened: true,
			hasNotify: true,
			css: {
				top: 'calc(63px + 40px)',
			},
		},
		{
			opened: true,
			hasNotify: true,
			detached: false,
			css: {
				paddingBottom: '30px',
			},
		},
		{
			hasNotify: true,
			detached: true,
			css: {
				top: '63px',
			},
		},
	],
})

export default MobileNavigationContainer
