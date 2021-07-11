import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
	return (
		<div className='error-page'>
			<h1>404</h1>
			<div className='error-message'>
				<h2>This page does not exist.</h2>
				<Link href='/'>Go back</Link>
			</div>
		</div>
	)
}

export default NotFoundPage
