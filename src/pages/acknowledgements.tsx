import Head from 'next/head'
import React from 'react'

const Acknowledgements = () => {
	return (
		<div>
			<Head>
				<title>Acknowledgements | Max Wood</title>
			</Head>
			<h1>Acknowledgements</h1>
			<div>
				I&apos;d like to acknowledge the following for their contributions to
				this site.
			</div>
			<ul>
				<li>
					<a href='https://fontawesome.com/license'>Font Awesome</a>, for their
					outstanding free icons.
				</li>
			</ul>
		</div>
	)
}

export default Acknowledgements
