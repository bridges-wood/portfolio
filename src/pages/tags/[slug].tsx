import { BlogpostPreview } from '@components/blogposts'
import TagsLayout from '@layouts/tags'
import { formatSlug, slugify } from '@lib/posts'
import { Container, Grid, Spacer, Text } from '@nextui-org/react'
import { BlogPost } from '@pages/posts'
import { getPostsByTag, postFilePaths, POSTS_PATH } from '@utils/posts'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import _ from 'lodash'
import { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path'
import { FC, useState } from 'react'

interface TagPageProps {
	tag: string
	posts: BlogPost[]
}

const TagPage: FC<TagPageProps> = ({ tag, posts }) => {
	const [displayed, setDisplayed] = useState(10)

	return (
		<TagsLayout>
			<Grid.Container
				css={{
					display: 'grid',
					placeItems: 'center',
					marginTop: '1rem',
					maxWidth: '100%',
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
					}}
					as='section'
				>
					<Container
						css={{
							p: '0 0',
							'@smMax': {},
						}}
					>
						<Grid.Container>
							<Grid
								xs={12}
								sm={12}
								css={{
									'@md': {
										whiteSpace: 'nowrap',
										width: 'min-content',
									},
								}}
							>
								<Text
									h1
									css={{
										boxSizing: 'content-box',
										'@smMax': {
											fontSize: '$xl4',
										},
									}}
								>
									{tag}
								</Text>
							</Grid>
						</Grid.Container>
					</Container>
					<Spacer y={0.6} />
					<Grid
						css={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
							'& .blogpost__preview': {
								mb: '$14',
								'@smMax': {
									mb: '$8',
								},
							},
							':last-child': {
								mb: 0,
							},
						}}
					>
						{posts.slice(0, displayed).map((post) => (
							<BlogpostPreview {...post} key={post.slug} showTags={false} />
						))}
						{displayed > posts.length ? (
							<>
								<Spacer y={1} />
								<Text small css={{ m: '0 auto', color: '$accents6' }}>
									⋮
								</Text>
								<Text small css={{ m: '0 auto', color: '$accents6' }}>
									That&apos;s all there is to see.
								</Text>
							</>
						) : null}
						{displayed < posts.length ? (
							<button onClick={() => setDisplayed(displayed + 10)}>
								See more
							</button>
						) : null}
					</Grid>
				</Grid>
			</Grid.Container>
		</TagsLayout>
	)
}

export const getStaticProps: GetStaticProps<TagPageProps> = async ({
	params,
}) => {
	const tag = formatSlug(String(params.slug))
	const posts = getPostsByTag(tag)

	return {
		props: {
			tag,
			posts,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const tags = postFilePaths
		.map((postFileName) => {
			const qualifiedPath = path.join(POSTS_PATH, postFileName)
			const source = readFileSync(qualifiedPath)
			const { data } = matter(source)

			return data.tags
		})
		.flat()

	const uniqueTags = _.uniq(tags)

	return {
		paths: uniqueTags.map((tag) => ({ params: { slug: slugify(tag) } })),
		fallback: false,
	}
}

export default TagPage
