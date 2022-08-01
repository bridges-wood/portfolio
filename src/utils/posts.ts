import { countWords, slugify } from '@lib/posts'
import { BlogPost } from '@pages/posts/index'
import FrontMatter from '@typings/frontMatter'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import _ from 'lodash'
import { join } from 'path'

export const POSTS_PATH = join(process.cwd(), 'src/posts')

/**
 * Get the paths to all posts from the posts directory
 */
export const postFilePaths = readdirSync(POSTS_PATH).filter((path) =>
	/\.mdx?$/.test(path)
)

/**
 * Finds all posts in the posts directory that have a tag in their metadata.
 * @param tag The tag to filter by.
 * @returns An array of posts that have the tag in their metadata.
 */
export const getPostsByTag = _.memoize((tag: string): BlogPost[] => {
	return postFilePaths
		.map((postFileName) => {
			const qualifiedPath = join(POSTS_PATH, postFileName)
			const source = readFileSync(qualifiedPath)
			const { content, data } = matter(source)

			return {
				...(data as FrontMatter),
				slug: slugify(postFileName.replace(/\.mdx?$/, '')),
				wordCount: countWords(content),
			}
		})
		.filter((post) => post.tags.includes(tag))
})
