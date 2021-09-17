import Head from 'next/head'
import React from 'react'

const Contact = () => {
	return (
		<div className='contact'>
			<Head>
				<title>Contact | Max Wood</title>
			</Head>
			<div className='border-wrapper'>
				<div className='info-wrapper'>
					<address>
						<div className='name'>Max Wood</div>
						<hr />
						<a className='link' href='mailto:bridges.wood@gmail.com'>
							<span className='email-address'>bridges.wood@gmail.com</span>
						</a>
						<div className='signature'>MW</div>
					</address>
				</div>
			</div>
		</div>
	)
}

export default Contact
