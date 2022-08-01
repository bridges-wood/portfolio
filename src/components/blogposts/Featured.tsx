import { parseDate } from '@lib/date'
import { Card, Col, Text } from '@nextui-org/react'
import type { BlogPost } from '@pages/posts'
import { useRouter } from 'next/router'
import { FC } from 'react'

type FeaturedBlogpostProps = BlogPost

const FeaturedBlogpost: FC<FeaturedBlogpostProps> = ({
	title,
	slug: address,
	date,
}) => {
	const router = useRouter()

	return (
		<Card
			isPressable
			onPress={() => {
				router.push(`/posts/${address}`)
			}}
		>
			<Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
				<Col>
					<Text
						h1
						css={{
							textGradient: '$textGradient',
							width: 'min-content',
							whiteSpace: 'nowrap',
						}}
					>
						{title}
					</Text>
					<Text css={{ lp: 4 }} color='#ffffffAA'>
						Published on {parseDate(date).toLocaleDateString()}
					</Text>
				</Col>
			</Card.Header>

			<Card.Image
				src='https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'
				alt='Background image'
				css={{
					pointerEvents: 'none',
					position: 'absolute',
					filter: 'brightness(0.5) ',
				}}
				objectFit='cover'
				width='100%'
				height={340}
			/>
		</Card>
	)
}

export default FeaturedBlogpost
