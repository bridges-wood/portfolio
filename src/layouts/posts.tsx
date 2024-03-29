import Fixed from '@components/Fixed'
import PageNav from '@components/PageNav'
import TableOfContents from '@components/TableOfContents'
import { Route } from '@lib/page'
import { Col, Container, Row } from '@nextui-org/react'
import FrontMatter from '@typings/Post'
import { Heading } from '@utils/headings'
import { FC, PropsWithChildren } from 'react'
import Footer from './Footer'
import { DefaultRoutes } from './index'
import Navbar from './Navbar'

export interface PostsLayoutProps {
	routes?: Route[]
	currentRoute?: Route
	prevRoute?: Route
	nextRoute?: Route
	meta?: FrontMatter
	tag?: string
	slug?: string
	headings?: Heading[]
	includeTableOfContents?: boolean
}

const PostsLayout: FC<PropsWithChildren<PostsLayoutProps>> = ({
	children,
	routes = DefaultRoutes,
	prevRoute,
	nextRoute,
	currentRoute,
	meta,
	tag,
	slug,
	headings = [],
	includeTableOfContents = true,
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
						justifyContent: 'center',
						'@lg': {
							pt: '1rem',
						},
					}}
				>
					{includeTableOfContents && headings.length > 0 ? (
						<Col
							css={{
								w: '32%',
								d: 'none',
								'@md': {
									d: 'block',
								},
							}}
						>
							<Fixed
								offset={92}
								className='posts__left-sidebar'
								css={{
									overflow: 'auto',
									zIndex: '$2',
									pb: '$28',
									'&::-webkit-scrollbar': {
										width: '0px',
									},
								}}
							>
								<TableOfContents headings={headings} />
							</Fixed>
						</Col>
					) : null}

					<Col
						className='posts__center'
						css={{
							m: '0 $4 0 $4',
							maxW: '100%',
							overflow: 'auto',
							'@xsMax': {
								p: 0,
							},
						}}
					>
						{children}
						<PageNav tag={tag} prevRoute={prevRoute} nextRoute={nextRoute} />
					</Col>
				</Row>
				<Footer />
			</Container>
		</div>
	)
}

export default PostsLayout
