import { styled, VariantProps } from '@nextui-org/react'

export const LinkContainer = styled('div', {
	m: '18px 0',
	d: 'flex',
	ai: 'center',
	minHeight: '24px',
	'&::before': {
		content: '',
		fb: '4px',
		fs: '0',
		display: 'block',
		width: '4px',
		height: '4px',
		br: '50%',
		mr: '16px',
	},
	':first-child': {
		mt: 0,
	},
	':last-child': {
		mb: 0,
	},
	'@media screen and (max-width: 950px)': {
		m: '24px 0',
	},
	variants: {
		disabled: {
			true: {
				cursor: 'not-allowed',
			},
		},
		selected: {
			true: {
				color: '$accents6',
			},
			false: {
				color: '$accents4',
			},
		},
	},
	defaultVariants: {
		selected: false,
		disabled: false,
	},
})

export type LinkContainerVariantsProps = VariantProps<typeof LinkContainer>
