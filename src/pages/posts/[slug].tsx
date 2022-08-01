import AnchoredHeading from '@components/AnchoredHeading'
import PostsLayout from '@layouts/posts'
import { Link, Spacer, Text } from '@nextui-org/react'
import { injectMetadata } from '@plugins'
import FrontMatter from '@typings/frontMatter'
import { postFilePaths, POSTS_PATH } from '@utils/posts'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
	MDXRemote,
	MDXRemoteProps,
	MDXRemoteSerializeResult,
} from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Image, { ImageProps } from 'next/image'
import path from 'path'
import unwrapImages from 'remark-unwrap-images'

/**
 * @see https://github.com/vercel/next.js/blob/canary/examples/with-mdx-remote/pages/posts/%5Bslug%5D.js
 */
const components: MDXRemoteProps['components'] = {
	img: ({ src, alt, placeholder, style, ...props }) => (
		<div
			style={{
				margin: '12px 0',
			}}
		>
			<Image
				src={src}
				alt={alt}
				layout='intrinsic'
				loading='lazy'
				placeholder={placeholder as ImageProps['placeholder']}
				{...props}
			/>
		</div>
	),

	h1: (props) => <AnchoredHeading h1 {...props} />,
	h2: (props) => <AnchoredHeading h2 {...props} />,
	h3: (props) => <AnchoredHeading h3 {...props} />,
	h4: (props) => <AnchoredHeading h4 {...props} />,
	h5: (props) => <AnchoredHeading h5 {...props} />,
	h6: (props) => <AnchoredHeading h6 {...props} />,
	p: ({ children }) => <Text>{children}</Text>,
	a: Link,
}

interface PageProps {
	source: MDXRemoteSerializeResult<Record<string, unknown>>
	frontMatter: FrontMatter
}

const PostPage = ({ source, frontMatter }: PageProps) => (
	<PostsLayout>
		<Head>
			<title>{`${frontMatter.title} | ${frontMatter.author}`}</title>
			<meta name='author' content={frontMatter.author} />
			<meta property='og:title' content={frontMatter.title} />
		</Head>
		<Text h1>{frontMatter.title}</Text>
		<Text small suppressHydrationWarning>
			Published on {new Date(frontMatter.date).toLocaleDateString()}
		</Text>
		{frontMatter.description && <Text>{frontMatter.description}</Text>}
		<Spacer y={0.5} />
		<main>
			<MDXRemote {...source} components={components} lazy />
		</main>
	</PostsLayout>
)

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

	if (!data.isPublished)
		return { redirect: { statusCode: 302, destination: '/' } }

	const mdxSource = await serialize(content.toString(), {
		scope: data,
		mdxOptions: {
			rehypePlugins: [injectMetadata],
			remarkPlugins: [unwrapImages],
		},
	})

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }))

	return { paths, fallback: false }
}

export default PostPage
