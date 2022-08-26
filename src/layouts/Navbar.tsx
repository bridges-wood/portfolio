import AnimatedLink from '@components/AnimatedLink'
import Logo from '@components/Logo'
import ThemeToggle from '@components/ThemeToggle'
import { Route } from '@lib/page'
import { Navbar as NextNavbar, Spacer, useTheme } from '@nextui-org/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export interface ComponentProps {
	routes?: Route[]
	hasNotify?: boolean
	isHome?: boolean
}

const Navbar: React.FC<ComponentProps> = ({ routes, hasNotify, isHome }) => {
	const router = useRouter()
	const { isDark } = useTheme()

	return (
		<NextNavbar
			variant='sticky'
			isBordered={isDark}
			shouldHideOnScroll={
				router.asPath === '/posts' || router.asPath === '/projects'
			}
		>
			<Spacer
				x={1}
				css={{
					'@sm': {
						display: 'none',
					},
				}}
			/>
			<NextNavbar.Brand>
				<NextLink href='/' passHref>
					<a>
						<Logo />
					</a>
				</NextLink>
			</NextNavbar.Brand>
			<NextNavbar.Toggle showIn='sm' />
			<NextNavbar.Content
				hideIn='sm'
				enableCursorHighlight
				variant='underline-rounded'
			>
				<NextNavbar.Link isActive={router.asPath === '/posts'} href='/posts'>
					Blog
				</NextNavbar.Link>
				<NextNavbar.Link
					isActive={router.asPath === '/projects'}
					href='/projects'
				>
					Projects
				</NextNavbar.Link>
				<NextNavbar.Link
					isActive={router.asPath === '/contact'}
					href='/contact'
				>
					Contact
				</NextNavbar.Link>
				<NextNavbar.Link
					isActive={router.asPath === '/acknowledgements'}
					href='/acknowledgements'
				>
					Acknowledgements
				</NextNavbar.Link>
				<ThemeToggle />
			</NextNavbar.Content>
			<NextNavbar.Collapse>
				<NextNavbar.CollapseItem isActive={router.asPath === '/posts'}>
					<AnimatedLink
						href='/posts'
						css={{
							color: 'inherit',
						}}
					>
						Blog
					</AnimatedLink>
				</NextNavbar.CollapseItem>
				<NextNavbar.CollapseItem isActive={router.asPath === '/projects'}>
					<AnimatedLink
						href='/projects'
						css={{
							color: 'inherit',
						}}
					>
						Projects
					</AnimatedLink>
				</NextNavbar.CollapseItem>
				<NextNavbar.CollapseItem isActive={router.asPath === '/contact'}>
					<AnimatedLink
						href='/contact'
						css={{
							color: 'inherit',
						}}
					>
						Contact
					</AnimatedLink>
				</NextNavbar.CollapseItem>
				<NextNavbar.CollapseItem
					isActive={router.asPath === '/acknowledgements'}
				>
					<AnimatedLink
						href='/acknowledgements'
						css={{
							color: 'inherit',
						}}
					>
						Acknowledgements
					</AnimatedLink>
				</NextNavbar.CollapseItem>
				<NextNavbar.CollapseItem>
					<ThemeToggle />
				</NextNavbar.CollapseItem>
			</NextNavbar.Collapse>
		</NextNavbar>
	)
}

export default Navbar
