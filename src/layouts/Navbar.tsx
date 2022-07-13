import AnimatedLink from '@components/AnimatedLink'
import { Github, Gmail, LinkedIn } from '@components/icons'
import Logo from '@components/Logo'
import MenuToggle from '@components/MenuToggle'
import { Box } from '@components/primitives'
import ThemeToggle from '@components/ThemeToggle'
import { useMediaQuery, useScrollPosition } from '@hooks'
import { Route } from '@lib/page'
import {
	Col,
	Container,
	CSS,
	Link,
	Row,
	Spacer,
	useBodyScroll,
	useTheme,
} from '@nextui-org/react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { StyledNavContainer, StyledNavMainContainer } from './styles'

export interface ComponentProps {
	routes?: Route[]
	hasNotify?: boolean
	isHome?: boolean
}

const MobileNavigation = dynamic(
	() => import('@components/mobile-navigation/MobileNavigation'),
	{
		ssr: false,
	}
)

const SocialLinkCSS: CSS = {
	m: '0 6px',
	'& svg': {
		transition: '$default',
	},
	'&:hover': {
		'& svg': {
			opacity: 0.7,
		},
	},
}

const Navbar: React.FC<ComponentProps> = ({ routes, hasNotify, isHome }) => {
	const router = useRouter()
	const { theme } = useTheme()
	const [expanded, setExpanded] = useState(false)
	const isMobile = useMediaQuery('(max-width: 960px)')
	const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true })
	const scrollPosition = useScrollPosition()

	const detached = hasNotify ? scrollPosition > 30 : scrollPosition > 0
	const showBlur = !!expanded || !!detached || isHome

	useEffect(() => {
		if (!isMobile) {
			setExpanded(false)
			setBodyHidden(false)
		}
	}, [isMobile, setBodyHidden])

	const onToggleNavigation = () => {
		setExpanded(!expanded)

		if (isMobile) {
			setBodyHidden(!expanded)
		}
	}

	return (
		<StyledNavMainContainer id='navbar-container'>
			<StyledNavContainer detached={detached} showBlur={showBlur}>
				<Container lg as='nav' display='flex' wrap='nowrap' alignItems='center'>
					<Col
						className='navbar__logo-container'
						css={{
							height: '40px',
							'@mdMax': {
								width: '100',
							},
						}}
					>
						<Row justify='flex-start' align='center'>
							<NextLink href='/'>
								<Link href='/'>
									<Logo
										height={40}
										width={40}
										className='navbar__logo'
										css={{
											cursor: 'pointer',
											transition: '$default',
										}}
									/>
								</Link>
							</NextLink>
						</Row>
					</Col>
					<Col
						className='navbar__resources-container'
						css={{
							'@mdMax': {
								d: 'none',
							},
						}}
					>
						<Row justify='center' align='center'>
							<Spacer x={1} y={0} />
							<AnimatedLink
								icon={false}
								href='/posts'
								className='navbar__link'
								title='Blog'
								css={{
									color: '$text',
									'&.active': {
										fontWeight: '600',
										color: '$primary',
									},
								}}
							>
								Blog
							</AnimatedLink>
							<Spacer x={1} y={0} />
							<AnimatedLink
								icon={false}
								href='/projects'
								className='navbar__link'
								title='Projects'
								css={{
									color: '$text',
									'&.active': {
										fontWeight: '600',
										color: '$primary',
									},
								}}
							>
								Projects
							</AnimatedLink>
						</Row>
					</Col>
					<Col>
						<Row
							className='navbar__social-icons-container'
							justify='flex-end'
							align='center'
							gap={1}
							css={{
								width: 'initial',
								'@mdMax': {
									d: 'none',
								},
							}}
						>
							<Link
								className='navbar_social-icon'
								href='https://github.com/bridges-wood'
								target='_blank'
								rel='noreferrer'
								css={SocialLinkCSS}
							>
								<Github size={24} fill={theme.colors.foreground.value} />
							</Link>
							<Link
								className='navbar_social-icon'
								href='https://www.linkedin.com/in/max-wood-181140182/'
								target='_blank'
								rel='noreferrer'
								css={SocialLinkCSS}
							>
								<LinkedIn size={24} fill={theme.colors.foreground.value} />
							</Link>
							<Link
								className='navbar_social-icon'
								href='mailto:bridges.wood@gmail.com'
								target='_blank'
								rel='noreferrer'
								css={SocialLinkCSS}
							>
								<Gmail size={24} fill={theme.colors.foreground.value} />
							</Link>
							<ThemeToggle
								className='navbar_social-icon'
								css={{
									m: '0 6px',
									'& svg': {
										transition: '$default',
									},
									'&:hover': {
										'& svg': {
											opacity: 0.7,
										},
									},
								}}
							/>
						</Row>
					</Col>
					<Col
						className='navbar__menu-container'
						css={{
							size: '100%',
							display: 'none',
							'@mdMax': {
								display: 'flex',
								justifyContent: 'flex-end',
							},
						}}
					>
						<ThemeToggle
							className='navbar__social-icon-mobile'
							css={{
								m: '0',

								mt: '3px',
								mr: '6px',
							}}
						/>
						<Box
							className='navbar__menu-arrow noselect'
							onClick={onToggleNavigation}
							css={{
								height: '100%',
								minHeight: '30px',
								mt: '5px',
								mb: '5px',
								minWidth: '30px',
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center',
								cursor: 'pointer',
							}}
						>
							<MenuToggle expanded={expanded} />
						</Box>
					</Col>
					<MobileNavigation
						hasNotify={hasNotify}
						routes={routes}
						opened={expanded}
						detached={detached}
						onClose={() => {
							setExpanded(false)
							setBodyHidden(false)
						}}
					/>
				</Container>
			</StyledNavContainer>
		</StyledNavMainContainer>
	)
}

export default Navbar
