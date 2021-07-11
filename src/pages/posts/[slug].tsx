import FrontMatter from '@typings/frontMatter'
import { postFilePaths, POSTS_PATH } from '@utils/blog'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import path from 'path'

/**
 * Borrowed from: https://github.com/vercel/next.js/blob/canary/examples/with-mdx-remote/pages/posts/%5Bslug%5D.js
 */

const components = {
	Head,
}

interface PageProps {
	source: MDXRemoteSerializeResult<Record<string, unknown>>
	frontMatter: FrontMatter
}

const PostPage = ({ source, frontMatter }: PageProps) => (
	<div className='post'>
		<div className='post-header'>
			<h1>{frontMatter.title}</h1>
			<small>
				Published on {new Date(frontMatter.date).toLocaleDateString()}
			</small>
			{frontMatter.description && (
				<p className='description'>{frontMatter.description}</p>
			)}
		</div>
		<main className='post-body'>
			<MDXRemote {...source} components={components} />
		</main>
	</div>
)

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

	if (!data.isPublished)
		return { redirect: { statusCode: 302, destination: '/' } }

	const mdxSource = await serialize(content, {
		scope: data,
	})

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	}
}

export const getStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }))

	return { paths, fallback: false }
}

export default PostPage
