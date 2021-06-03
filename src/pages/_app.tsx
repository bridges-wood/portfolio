import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import React from 'react'
import '../scss/main.scss'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<aside>
				<Navbar />
			</aside>
			<main className='content'>
				<Component {...pageProps} />
				<Footer />
			</main>
		</>
	)
}

export default MyApp
