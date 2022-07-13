import { BlogpostPreview, FeaturedBlogpost } from '@components/blogposts'
import PostsLayout from '@layouts/posts'
import { Grid, Text } from '@nextui-org/react'
import FrontMatter from '@typings/frontMatter'
import { postFilePaths, POSTS_PATH } from '@utils/blog'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import path from 'path'
import { useState } from 'react'

const FEATURED = 'harrys-hot-tubs'

export interface BlogPost extends FrontMatter {
	address: string
}

interface PageProps {
	featured: BlogPost
	posts: BlogPost[]
}

const Index = ({ featured, posts }: PageProps) => {
	const [displayed, setDisplayed] = useState(10)

	return (
		<PostsLayout>
			<Head>
				<title>Blog | Max Wood</title>
			</Head>
			{featured ? <FeaturedBlogpost {...featured} /> : null}
			<Grid.Container
				css={{
					marginTop: '1rem',
					marginLeft: '1em',
				}}
			>
				<Grid md={3}>
					<Text h1>Latest Posts</Text>
				</Grid>
				<Grid
					md={7}
					css={{
						flexDirection: 'column',
					}}
				>
					{posts.slice(0, displayed).map((post) => (
						<BlogpostPreview {...post} key={post.address} />
					))}
					{displayed < posts.length ? (
						<button onClick={() => setDisplayed(displayed + 10)}>
							See more
						</button>
					) : null}
				</Grid>
			</Grid.Container>
		</PostsLayout>
	)
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const hydratedPosts: BlogPost[] = postFilePaths.map((postFileName) => {
		const completePath = path.join(POSTS_PATH, postFileName)
		const source = fs.readFileSync(completePath)
		const { data } = matter(source)
		return {
			...(data as FrontMatter),
			address: postFileName.split('.')[0],
		}
	})

	const published = hydratedPosts.filter((post) => post.isPublished)

	const postsByDate = published.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)

	return {
		props: {
			featured: published.find((post) => post.address === FEATURED),
			posts: postsByDate,
		},
	}
}

export default Index
