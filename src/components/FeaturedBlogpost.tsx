import { BlogPost } from '@pages/posts'
import React from 'react'

interface ComponentProps extends BlogPost {}

const FeaturedBlogpost = ({ title, address, date }: ComponentProps) => {
	return (
		<div className='featured-post'>
			<img
				src='https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'
				className='featured-post-bg'
			/>
			<a href={`/posts/${address}`}>{title}</a>
			<div className='featured-post-date'>
				Published on {new Date(date).toLocaleDateString()}
			</div>
		</div>
	)
}

export default FeaturedBlogpost
