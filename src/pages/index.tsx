import Hero from '@components/Hero'
import { DefaultRoutes } from '@layouts'
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
			routes: DefaultRoutes,
			currentRoute: null,
		},
	}
}

export default IndexPage
