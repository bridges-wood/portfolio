export interface FrontMatter {
	slug: string
	title: string
	subtitle?: string
	description?: string
	coverImage?: string
	tags: string[]
	author: string
	isPublished: boolean
	date: string
	isLocal: true
}

export interface RemotePost {
	url: string
	title: string
	subtitle?: string
	description?: string
	coverImage?: string
	tags: string[]
	author: string
	date: string
	isLocal: false
}

export type Post = RemotePost | FrontMatter
export type RemotePostWithWordCount = RemotePost & { wordCount: number }
export type FrontMatterWithWordCount = FrontMatter & { wordCount: number }
export type PostWithWordCount =
	| RemotePostWithWordCount
	| FrontMatterWithWordCount

export const isRemotePost = (post: Post): post is RemotePost => {
	return post.isLocal === false
}

export const isLocalPost = (post: Post): post is FrontMatter => {
	return post.isLocal === true
}

export default Post
