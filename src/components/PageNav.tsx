import { addTagToSlug, Route } from '@lib/page'
import { Container, Link, styled, useTheme } from '@nextui-org/react'
import { removeAfterLast } from '@utils'
import NextLink from 'next/link'
import { FC } from 'react'

export interface PageNavProps {
	tag?: string
	prevRoute?: Route
	nextRoute?: Route
}

const StyledLink = styled(Link, {
	'&.page-nav__link': {
		d: 'flex',
		ai: 'center',
		color: '$text',
		'&:hover': {
			bg: '$accents2',
		},
	},
})

const PageNav: FC<PageNavProps> = ({ tag, prevRoute, nextRoute }) => {
	const { theme } = useTheme()
	return (
        <Container
			display='flex'
			justify='space-between'
			className='page-nav'
			css={{ py: '12%' }}
			gap={0}
		>
			{prevRoute ? (
				<NextLink
                    href={addTagToSlug(removeAfterLast(prevRoute.path || '', '.'), tag)}
                    legacyBehavior>
					<StyledLink block className='pag-nav__link'>
						{prevRoute.title}
					</StyledLink>
				</NextLink>
			) : (
				<span />
			)}
			{nextRoute ? (
				<NextLink
                    href={addTagToSlug(removeAfterLast(nextRoute.path || '', '.'), tag)}
                    legacyBehavior>
					<StyledLink block className='page-nav__link'>
						{nextRoute.title}
					</StyledLink>
				</NextLink>
			) : null}
		</Container>
    );
}

export default PageNav
