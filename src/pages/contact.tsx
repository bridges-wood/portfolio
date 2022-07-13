import DefaultLayout from '@layouts/default'
import { Button, Container, Text } from '@nextui-org/react'
import Head from 'next/head'

const Contact = () => {
	return (
		<DefaultLayout>
			<Head>
				<title>Contact | Max Wood</title>
			</Head>
			<Container
				as='section'
				display='grid'
				css={{
					position: 'relative',
					height: 'calc(84vh - 76px)',
					'@xsMax': {
						height: 'calc(100vh - 64px)',
					},
					placeItems: 'center',
				}}
			>
				<Container direction='column' xs>
					<Text
						h1
						className='name'
						css={{
							textGradient: '45deg, #f5e004, #f02cec',
							width: 'fit-content',
							mr: 'auto',
							ml: 0,
						}}
					>
						Get In Touch
					</Text>
					<hr />
					<Text>
						I&apos;m always looking for new opportunities to learn and grow. My
						inbox is always open, so if you have any questions or want to chat,
						feel free to reach out.
					</Text>
					<Text
						size='$xl'
						css={{
							fontFamily: 'Nothing You Could Do',
							textDecoration: 'underline',
							textDecorationThickness: '1px',
						}}
					>
						MW
					</Text>
					<Button
						href='mailto:bridges.wood@gmail.com'
						as='a'
						color='gradient'
						css={{
							mt: '1rem',
							width: 'min-content',
						}}
						animated
						auto
						ghost
					>
						Say Hello
					</Button>
				</Container>
			</Container>
		</DefaultLayout>
	)
}

export default Contact
