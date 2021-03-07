import React from 'react'
import Header from '../components/Header'
import '../scss/main.scss'

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Header />
			<div className='content'>
				<Component {...pageProps} />
			</div>
		</React.Fragment>
	)
}

export default MyApp
