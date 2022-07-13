import Fixed from '@components/Fixed'
import { Route } from '@lib/page'
import { Col, Container, Row } from '@nextui-org/react'
import FrontMatter from '@typings/frontMatter'
import { getHeadings, Heading } from '@utils/headings'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { DefaultRoutes } from './index'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export interface PostsLayoutProps {
	routes?: Route[]
	currentRoute?: Route
	prevRoute?: Route
	nextRoute?: Route
	meta?: FrontMatter
	tag?: string
	slug?: string
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
}) => {
	const [headings, setHeadings] = useState<Heading[]>([])

	useEffect(() => {
		setHeadings(getHeadings())
	}, [routes])

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
				}}
			>
				<Row
					className='posts__content'
					gap={0}
					css={{
						'@lg': {
							pt: '1rem',
						},
					}}
				>
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
								maxH: 'calc(100vh - 4rem)',
								overflow: 'auto',
								zIndex: '$2',
								pb: '$28',
								'&::-webkit-scrollbar': {
									width: '0px',
								},
							}}
						>
							<Sidebar routes={routes} tag={tag} slug={slug} />
						</Fixed>
					</Col>
					<Col
						className='docs__center'
						css={{
							zIndex: '$10',
							maxW: '100%',
							overflow: 'auto',
							'@xsMax': {
								p: 0,
							},
						}}
					>
						{children}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default PostsLayout
