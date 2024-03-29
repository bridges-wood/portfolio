import AnimatedLink from '@components/AnimatedLink'
import DefaultLayout from '@layouts/default'
import { Text } from '@nextui-org/react'
import Head from 'next/head'

const Acknowledgements = () => {
	return (
		<DefaultLayout>
			<Head>
				<title>Acknowledgements | Max Wood</title>
			</Head>
			<section>
				<Text h1>Acknowledgements</Text>
				<div>
					I&apos;d like to acknowledge the following for their contributions to
					this site.
				</div>
				<ul>
					<li>
						<AnimatedLink href='https://jrgarciadev.com/'>
							Junior Garcia
						</AnimatedLink>
						, for his awesome NextUI library.
					</li>
				</ul>
			</section>
		</DefaultLayout>
	)
}

export default Acknowledgements
