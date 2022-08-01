import { Route } from '@lib/page'
import { Container } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'
import Footer from './Footer'
import { DefaultRoutes } from './index'
import Navbar from './Navbar'

export interface DefaultLayoutProps {
	routes?: Route[]
	currentRoute?: Route
	tag?: string
	slug?: string
}

const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({
	children,
	routes = DefaultRoutes,
	currentRoute,
}) => (
	<div id='app-container'>
		{/* <Header />
		<NotifyBanner /> */}
		<Navbar
			isHome={currentRoute?.path === '/'}
			hasNotify={false}
			routes={routes}
		/>
		<Container
			lg
			id='main-container'
			display='flex'
			as='main'
			alignContent='space-between'
			className='main-container'
			css={{
				position: 'relative',
				minHeight: '100vh',
				'@mdMax': {
					overflowX: 'hidden',
				},
			}}
		>
			{children}
			<Footer />
		</Container>
	</div>
)

export default DefaultLayout
