import { FeaturedProject, Project } from '@components/projects'
import featuredProjects from '@json/featuredProjects'
import DefaultLayout from '@layouts/default'
import { Container, Grid, Text } from '@nextui-org/react'
import { GithubProject } from '@typings/api/Projects'
import fetchProjects from '@utils/repos'
import { GetStaticProps } from 'next'
import Head from 'next/head'

interface PageProps {
	projects: GithubProject[]
	featured: any[]
}

const Projects = ({ projects, featured }: PageProps) => {
	return (
		<DefaultLayout>
			<Head>
				<title>Projects | Max Wood</title>
			</Head>
			<Container>
				<Text h1>Projects</Text>
			</Container>
			<Container
				css={{
					'.preview': {
						mb: '$12',
						mt: '$12',
					},
					'.preview:nth-of-type(odd)': {
						'@md': {
							'.preview__image': {
								order: 1,
							},
						},
						'.preview__header': {
							ai: 'flex-start',
						},
						'.preview__description': {
							ta: 'left',
						},
						'.preview__tags': {
							jc: 'flex-start',
						},
						'.preview__links': {
							jc: 'flex-start',
						},
					},
					'.preview:nth-of-type(even)': {
						'@md': {
							'.preview__image': {
								order: 0,
							},
						},
						'.preview__header': {
							ai: 'flex-end',
						},
						'.preview__description': {
							ta: 'right',
						},
						'.preview__tags': {
							jc: 'flex-end',
						},
						'.preview__links': {
							jc: 'flex-end',
						},
					},
				}}
			>
				{featured.map((project) => (
					<FeaturedProject key={project.title} project={project} />
				))}
				<hr />
				<Text h2> Other Projects</Text>
				<Grid.Container gap={2} justify='center'>
					{projects.slice(0, 6).map((project) => (
						<Grid key={project.id} xs={6} md={4}>
							<Project project={project} />
						</Grid>
					))}
				</Grid.Container>
			</Container>
		</DefaultLayout>
	)
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const projects = await fetchProjects()
	return {
		props: { projects, featured: featuredProjects },
	}
}

export default Projects
