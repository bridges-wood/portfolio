import { BlogPost } from '@pages/posts'
import React from 'react'

interface ComponentProps extends BlogPost {}

const BlogpostPreview = ({ title, address }: ComponentProps) => {
	return (
		<>
			<div>
				<a href={`/posts/${address}`}>{title}</a>
			</div>
			<hr />
		</>
	)
}

export default BlogpostPreview
