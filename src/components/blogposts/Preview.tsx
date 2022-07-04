import type { BlogPost } from '@pages/posts'
import { FC } from 'react'

type BlogpostPreviewProps = BlogPost

const BlogpostPreview: FC<BlogpostPreviewProps> = ({ title, address }) => {
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
