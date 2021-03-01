import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../scss/main.scss'

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</React.Fragment>
	)
}

export default MyApp
