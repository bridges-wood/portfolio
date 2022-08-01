import { Route } from '@lib/page'
import { Col, Container, Row } from '@nextui-org/react'
import FrontMatter from '@typings/frontMatter'
import { FC, PropsWithChildren } from 'react'
import Footer from './Footer'
import { DefaultRoutes } from './index'
import Navbar from './Navbar'

export interface TagsLayouProps {
	routes?: Route[]
	currentRoute?: Route
	prevRoute?: Route
	nextRoute?: Route
	meta?: FrontMatter
	tag?: string
	slug?: string
}

const TagsLayout: FC<PropsWithChildren<TagsLayouProps>> = ({
	children,
	routes = DefaultRoutes,
}) => {
	return (
		<div id='app-container'>
			<Navbar routes={routes} />
			<Container
				lg
				as='main'
				id='main-container'
				className='posts__container'
				display='flex'
				css={{
					position: 'relative',
					'@xs': {
						p: '0 48px 0 48px',
					},
					'@sm': {
						p: '0 64px 0 64px',
					},
				}}
			>
				<Row
					className='posts__content'
					gap={0}
					css={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						'@lg': {
							pt: '1rem',
						},
						minHeight: 'calc(100vh - 76px)',
						'@xsMax': {
							minHeight: 'calc(100vh - 64px)',
						},
					}}
				>
					<Col
						className='tags__center'
						css={{
							zIndex: '$10',
							maxW: '100%',
							h: '100%',
							'@md': {
								w: '1000px',
							},
							overflow: 'auto',
							'@xsMax': {
								p: 0,
							},
						}}
					>
						{children}
					</Col>
				</Row>
				<Footer />
			</Container>
		</div>
	)
}

export default TagsLayout
