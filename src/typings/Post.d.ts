interface Post {
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

interface Post {
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

export default Post