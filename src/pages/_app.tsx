import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AppComponent } from 'next/dist/shared/lib/router/router'
import '../scss/main.scss'

const darkTheme = createTheme({ type: 'dark' })
const lightTheme = createTheme({ type: 'light' })

const App: AppComponent = ({ Component, pageProps }) => {
	return (
		<NextThemesProvider
			defaultTheme='system'
			attribute='class'
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider>
				<aside>
					<Navbar />
				</aside>
				<main className='content'>
					<Component {...pageProps} />
					<Footer />
				</main>
			</NextUIProvider>
		</NextThemesProvider>
	)
}

export default App
