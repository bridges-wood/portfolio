import { styled, VariantProps } from '@nextui-org/react'
import { lightTheme } from '../../styles/global'

export const StyledBadge = styled('span', {
	d: 'inline-block',
	tt: 'uppercase',
	p: '5px 5px',
	m: '0 2px',
	fs: '10px',
	fontWeight: 800,
	br: '$pill',
	letterSpacing: '0.6px',
	lh: 1,
	textShadow: '0 1px 1px rgba(0,0,0,0.16)',
	bs: '1px 2px 5px 0px rgb(0 0 0 / 0.1)',
	ai: 'center',
	as: 'center',
	color: '$white',
	variants: {
		type: {
			default: {
				bg: '$primary',
			},
			primary: {
				bg: '$primary',
			},
			secondary: {
				bg: '$secondary',
			},
			warning: {
				bg: '$warning',
			},
			success: {
				bg: '$success',
			},
			error: {
				bg: '$error',
			},
			disabled: {
				fontSize: '9px',
				color: '$accents6',
				bg: 'rgba(255, 255, 255, 0.1)',
				[`.${lightTheme} &`]: {
					bg: '$accents1',
				},
			},
		},
	},
	defaultVariants: {
		type: 'default',
	},
})

export type BadgeVariantsProps = VariantProps<typeof StyledBadge>
