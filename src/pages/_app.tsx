import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import { AppComponent } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import '../scss/main.scss'

const App: AppComponent = ({ Component, pageProps }) => {
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

export default App
