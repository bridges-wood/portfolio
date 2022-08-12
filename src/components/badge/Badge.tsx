import { CSS } from '@nextui-org/react'
import { NativeAttributes } from '@typings'
import { FC, PropsWithChildren } from 'react'
import { BadgeVariantsProps, StyledBadge } from './badge.styles'

interface Props {
	className?: string
	css?: CSS
}

export type BadgeProps = Props & NativeAttributes<Props> & BadgeVariantsProps

const Badge: FC<PropsWithChildren<BadgeProps>> = ({ children, ...props }) => (
	<StyledBadge {...props}>{children}</StyledBadge>
)

export default Badge
