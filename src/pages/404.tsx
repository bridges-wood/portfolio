import AnimatedLink from '@components/AnimatedLink'
import { Col, Container, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

const NotFoundPage = () => {
	const router = useRouter()

	return (
		<Container fluid dir='row' className='error-page'>
			<Row>
				<Col>
					<Text h1>404</Text>
				</Col>
				<Col className='error-message'>
					<Text h2>This page does not exist.</Text>
					<AnimatedLink onClick={() => router.back()}>Go back</AnimatedLink>
				</Col>
			</Row>
		</Container>
	)
}

export default NotFoundPage
