import type { BlogPost } from '@pages/posts'
import { FC } from 'react'

type FeaturedBlogpostProps = BlogPost

const FeaturedBlogpost: FC<FeaturedBlogpostProps> = ({
	title,
	address,
	date,
}) => {
	return (
		<div className='featured-post'>
			<img
				src='https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'
				className='featured-post-bg'
				alt=''
			/>
			<a href={`/posts/${address}`}>{title}</a>
			<div className='featured-post-date'>
				Published on {new Date(date).toLocaleDateString()}
			</div>
		</div>
	)
}

export default FeaturedBlogpost
