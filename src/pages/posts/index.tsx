import { BlogpostPreview } from '@components/blogposts'
import { TagList } from '@components/tags'
import articles from '@json/articles'
import PostsLayout from '@layouts/posts'
import { countWords, slugify } from '@lib/posts'
import { Col, Grid, Spacer, Text } from '@nextui-org/react'
import {
	FrontMatter,
	FrontMatterWithWordCount,
	PostWithWordCount,
	RemotePost,
	RemotePostWithWordCount,
} from '@typings/Post'
import { countRemoteWords, postFilePaths, POSTS_PATH } from '@utils/posts'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import _ from 'lodash'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { join } from 'path'
import { useState } from 'react'

interface PageProps {
	featured?: PostWithWordCount
	posts: PostWithWordCount[]
	tags: string[]
}

const Index = ({ posts, tags, featured }: PageProps) => {
	const [displayed, setDisplayed] = useState(
		posts.length > 10 ? 10 : posts.length
	)

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
						{posts.slice(0, displayed).map((post, idx) => (
							<BlogpostPreview {...post} key={idx} />
						))}
						{displayed === posts.length ? (
							<Col
								css={{
									d: 'flex',
									flexDirection: 'column',
								}}
							>
								<Spacer y={1} />
								<Text small css={{ m: '0 auto', color: '$accents6' }}>
									⋮
								</Text>
								<Text small css={{ m: '0 auto', color: '$accents6' }}>
									That&apos;s all there is to see, so far.
								</Text>
							</Col>
						) : null}
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
	// Get all local posts
	const hydratedPosts: FrontMatterWithWordCount[] = postFilePaths.map(
		(postFileName) => {
			const completePath = join(POSTS_PATH, postFileName)
			const source = readFileSync(completePath)
			const { content, data } = matter(source)

			return {
				...(data as FrontMatter),
				slug: slugify(postFileName.replace(/\.mdx?$/, '')),
				wordCount: countWords(content),
				isLocal: true,
			}
		}
	)

	// Get all remote posts
	const hydratedArticles: RemotePostWithWordCount[] = await Promise.all(
		articles.map(async (article: RemotePost) => {
			return {
				...article,
				wordCount: await countRemoteWords(article.url),
			} as RemotePostWithWordCount
		})
	)

	const allPosts: PostWithWordCount[] = [...hydratedPosts, ...hydratedArticles]

	const published = allPosts.filter((post) => {
		// All remote posts are published by default
		if (!post.isLocal) return true

		return post.isPublished
	})

	// Sort by date, newest first
	const postsByDate = published.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)

	// Get all unique tags
	const uniqueTags = _.uniq(published.map((post) => post?.tags).flat())

	return {
		props: {
			// ! Currently no posts are to be featured
			posts: postsByDate,
			tags: uniqueTags,
		},
	}
}

export default Index
