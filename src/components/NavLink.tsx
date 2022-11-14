import { Link, styled } from '@nextui-org/react'
import { NativeAttributes } from '@typings'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
	href: string
	pathname: string
	title: string
	selected: boolean
	newPost?: boolean
	updated?: boolean
	comingSoon?: boolean
	color?: string
}

export type NavLinkProps = Props & NativeAttributes<Props>

const BaseLink = styled(Link, {
	d: 'flex',
	textDecoration: 'none',
	'@smMax': {
		pt: 0,
		pl: 0,
		pb: 0,
		d: 'flex',
		ai: 'center',
	},
	'&:active': {
		opacity: 0.7,
	},
	variants: {
		selected: {
			true: {
				boxSizing: 'border-box',
				fontWeight: '$semibold',
				'@smMax': {
					borderLeft: 'none',
					pl: 0,
				},
			},
		},
		disabled: {
			true: {
				cursor: 'not-allowed',
				pe: 'none',
			},
		},
	},
})

const NavLink: FC<NavLinkProps> = ({
	href,
	pathname,
	title,
	color,
	selected,
	comingSoon,
	onClick,
}) => {
	const router = useRouter()
	const onlyHashChange = pathname === router.pathname

	if (onlyHashChange) {
		return (
			<BaseLink
				href={pathname}
				selected={selected}
				disabled={comingSoon}
				css={{
					color: color ? color : 'inherit',
				}}
			>
				{title}
			</BaseLink>
		)
	}

	return (
        <NextLink href={!comingSoon ? pathname || href : ''} legacyBehavior>
			<BaseLink
				href={pathname}
				selected={selected}
				disabled={comingSoon}
				onClick={(e: any) => {
					if (!comingSoon && onClick) {
						onClick(e)
					}
				}}
				css={{
					color: color ? color : 'inherit',
				}}
			>
				{title}
			</BaseLink>
		</NextLink>
    );
}

export default NavLink
