import BlogpostPreview from '@components/BlogpostPreview'
import FeaturedBlogpost from '@components/FeaturedBlogpost'
import FrontMatter from '@typings/frontMatter'
import { postFilePaths, POSTS_PATH } from '@utils/blog'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import path from 'path'
import React, { useState } from 'react'

const FEATURED = 'first-post'

export interface BlogPost extends FrontMatter {
	address: string
}

interface PageProps {
	featured: BlogPost
	posts: BlogPost[]
}

const index = ({ featured, posts }: PageProps) => {
	const [displayed, setDisplayed] = useState(10)

	return (
		<div className='container'>
			{featured ? <FeaturedBlogpost {...featured} /> : null}
			<div className='latest-posts'>
				<h1>Latest Posts</h1>
				<div className='posts-list'>
					{posts.slice(0, displayed).map((post) => (
						<BlogpostPreview {...post} key={post.address} />
					))}
					{displayed < posts.length ? (
						<button onClick={() => setDisplayed(displayed + 10)}>
							See more
						</button>
					) : null}
				</div>
			</div>
		</div>
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

export default index
