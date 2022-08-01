import { BlogpostPreview } from '@components/blogposts'
import { TagList } from '@components/tags'
import PostsLayout from '@layouts/posts'
import { countWords, slugify } from '@lib/posts'
import { Grid, Spacer, Text } from '@nextui-org/react'
import FrontMatter from '@typings/frontMatter'
import { postFilePaths, POSTS_PATH } from '@utils/posts'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import _ from 'lodash'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { join } from 'path'
import { useState } from 'react'

const FEATURED = 'harrys-hot-tubs'

export interface BlogPost extends FrontMatter {
	slug: string
	wordCount: number
}

interface PageProps {
	featured: BlogPost
	posts: BlogPost[]
	tags: string[]
}

const Index = ({ featured, posts, tags }: PageProps) => {
	const [displayed, setDisplayed] = useState(10)

	return (
		<PostsLayout includeTableOfContents={false}>
			<Head>
				<title>Blog | Max Wood</title>
			</Head>
			<Grid.Container
				css={{
					display: 'grid',
					gridTemplateColumns: 'repeat(8,1fr) repeat(4, minmax(48px, 1fr))',
					gridTemplateRows: '1fr',
					columnGap: '32px',
					marginTop: '1rem',
					pl: '$12',
					'@smMax': {
						pl: '0',
						gridTemplateColumns: '1fr',
					},
				}}
			>
				<Grid
					css={{
						display: 'flex',
						flexDirection: 'column',
						gridColumnStart: '1',
						gridColumnEnd: 'span 8',
						gridRowStart: '1',
					}}
					as='section'
				>
					<Text h1>Latest Posts</Text>
					<Grid
						css={{
							flexDirection: 'column',
							width: '100%',
							'& .blogpost__preview': {
								mb: '$14',
								'@smMax': {
									mb: '$8',
								},
							},
						}}
					>
						{posts.slice(0, displayed).map((post) => (
							<BlogpostPreview {...post} key={post.slug} />
						))}
						{displayed < posts.length ? (
							<button onClick={() => setDisplayed(displayed + 10)}>
								See more
							</button>
						) : null}
						<Grid
							css={{
								flexDirection: 'column',
								jc: 'flex-start',
								display: 'none',

								'@smMax': {
									display: 'flex',
								},
							}}
							as='aside'
						>
							<hr style={{ width: '100%' }} />
							<Text
								h2
								css={{
									pt: '$8',
								}}
							>
								Looking for something specific?
							</Text>
							<Text>
								Check out the tags below to find the posts you&apos;re looking
								for.
							</Text>
							<Spacer y={0.6} />
							<Grid.Container>
								<TagList
									tags={tags}
									tagWrapper={Grid}
									css={{
										fs: '$xs',
										fontWeight: '$normal',
										tt: 'none',
										p: '6px 16px 6px 16px',
										m: '0 8px 8px 0',
										br: '3px',
									}}
								/>
							</Grid.Container>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					css={{
						display: 'flex',
						flexDirection: 'column',
						jc: 'flex-start',
						gridColumnStart: '9',
						gridColumnEnd: 'span 4',
						gridRowStart: '1',
						'@smMax': {
							display: 'none',
						},
					}}
					as='aside'
				>
					<Text
						css={{
							pt: '$18',
							tt: 'uppercase',
							fontWeight: '$bold',
						}}
					>
						What are you looking for?
					</Text>
					<Grid.Container>
						<TagList
							tags={tags}
							tagWrapper={Grid}
							css={{
								fs: '$xs',
								fontWeight: '$normal',
								tt: 'none',
								p: '6px 16px 6px 16px',
								m: '0 8px 8px 0',
								br: '3px',
							}}
						/>
					</Grid.Container>
				</Grid>
			</Grid.Container>
		</PostsLayout>
	)
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const hydratedPosts: BlogPost[] = postFilePaths.map((postFileName) => {
		const completePath = join(POSTS_PATH, postFileName)
		const source = readFileSync(completePath)
		const { content, data } = matter(source)

		return {
			...(data as FrontMatter),
			slug: slugify(postFileName.replace(/\.mdx?$/, '')),
			wordCount: countWords(content),
		}
	})

	const published = hydratedPosts.filter((post) => post.isPublished)

	const postsByDate = published.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)

	const uniqueTags = _.uniq(published.map((post) => post?.tags).flat())

	return {
		props: {
			featured: published.find((post) => post.slug === FEATURED),
			posts: postsByDate,
			tags: uniqueTags,
		},
	}
}

export default Index
