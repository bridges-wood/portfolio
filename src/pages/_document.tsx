import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class PortfolioDoc extends Document {
	render() {
		return (
			<Html>
				<title>Max Wood</title>
				<Head>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default PortfolioDoc
