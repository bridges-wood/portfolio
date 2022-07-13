import Hero from '@components/Hero'
import DefaultLayout from '@layouts/default'
import { Route } from '@lib/page'
import { GetStaticProps } from 'next'
import { FC } from 'react'

interface IndexProps {
	routes: Route[]
	currentRoute?: Route
}

const IndexPage: FC<IndexProps> = ({ routes, currentRoute }) => {
	return (
		<DefaultLayout routes={routes} currentRoute={currentRoute}>
			<Hero />
		</DefaultLayout>
	)
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
	return {
		props: {
			routes: [
				{
					heading: false,
					title: 'Blog',
					path: '/blog',
					updated: false,
				},
				{
					heading: false,
					title: 'Projects',
					path: '/projects',
					updated: false,
				},
				{
					heading: false,
					title: 'Contact',
					path: '/contact',
					updated: false,
				},
				{
					heading: false,
					title: 'Acknowledgements',
					path: '/acknowledgements',
					updated: false,
				},
			],
			currentRoute: {
				heading: false,
				title: 'Home',
				path: '/',
				updated: false,
			},
		},
	}
}

export default IndexPage
