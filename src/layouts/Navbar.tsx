import ThemeToggle from '@components/ThemeToggle'
import { Dropdown, Grid, Image, Link, styled } from '@nextui-org/react'
import { useMediaQuery } from '../hooks/useMediaQuery'

const Navbar = () => {
	const isTopbar = useMediaQuery('(max-width: 768px)')

	const CentredLink = styled(Link, {
		width: isTopbar ? 'auto' : '100%',
		justifyContent: 'center',
	})

	return (
		<Grid.Container
			direction={isTopbar ? 'row' : 'column'}
			css={{
				padding: '0.5rem',
				top: isTopbar ? '0' : 'auto',
				position: isTopbar ? 'fixed' : 'auto',
				zIndex: '1',
				backdropFilter: 'saturate(180%) blur(10px)',
				boxShadow: 'rgba(2, 1, 1, 0.1) 0px 5px 20px -5px',
				backgroundOrigin: 'padding-box',
			}}
			justify={isTopbar ? 'flex-start' : 'center'}
		>
			{isTopbar ? (
				<>
					<Dropdown>
						<Dropdown.Trigger>
							<Image
								src='/images/logo.png'
								alt='Max Wood'
								css={{
									aspectRatio: 13 / 9,
									height: '50px',
								}}
								containerCss={{
									marginLeft: '0',
								}}
							/>
						</Dropdown.Trigger>
						<Dropdown.Menu>
							<Dropdown.Item key='home'>
								<CentredLink href='/'>Home</CentredLink>
							</Dropdown.Item>
							<Dropdown.Item key='projects'>
								<CentredLink href='/projects'>Projects</CentredLink>
							</Dropdown.Item>
							<Dropdown.Item key='posts'>
								<CentredLink href='/posts'>Blog</CentredLink>
							</Dropdown.Item>
							<Dropdown.Item key='contact'>
								<CentredLink href='/contact'>Contact</CentredLink>
							</Dropdown.Item>
							<Dropdown.Item key='acknowledgements'>
								<CentredLink href='/acknowledgements'>
									Acknowledgements
								</CentredLink>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<ThemeToggle
						size='lg'
						css={{
							marginTop: 'auto',
							marginBottom: 'auto',
						}}
					/>
				</>
			) : (
				<>
					<CentredLink href='/'>
						<Image
							src='/images/logo.png'
							alt='Max Wood'
							css={{
								aspectRatio: 13 / 9,
								height: '50px',
								marginRight: isTopbar ? '0' : 'auto',
							}}
						/>
					</CentredLink>
					<Grid.Container
						direction={isTopbar ? 'row' : 'column'}
						css={{
							marginTop: isTopbar ? '0' : 'auto',
							marginBottom: isTopbar ? '0' : 'auto',
						}}
					>
						<CentredLink href='/projects'>Projects</CentredLink>
						<CentredLink href='/posts'>Blog</CentredLink>
						<CentredLink href='/contact'>Contact</CentredLink>
						<CentredLink href='/acknowledgements'>Acknowledgements</CentredLink>
					</Grid.Container>
					<Grid.Container
						direction={isTopbar ? 'column' : 'row'}
						justify='center'
					>
						<ThemeToggle
							size='lg'
							css={{
								width: isTopbar ? '100%' : 'auto',
							}}
						/>
					</Grid.Container>
				</>
			)}
		</Grid.Container>
	)
}

export default Navbar
