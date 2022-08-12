import { styled } from '@nextui-org/react'

const MobileNavigationWrapper = styled('div', {
	display: 'none',
	width: '100%',
	minHeight: '100%',
	background: '$background',
	'@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
		background: '$menuBackground',
		backdropFilter: 'saturate(180%) blur(10px)',
	},
})

export default MobileNavigationWrapper
