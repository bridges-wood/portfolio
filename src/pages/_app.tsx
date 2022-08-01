import { NextUIProvider } from '@nextui-org/react'
import globalStyles, { darkTheme, lightTheme } from '@styles/global'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AppComponent } from 'next/dist/shared/lib/router/router'

const App: AppComponent = ({ Component, pageProps }) => {
	globalStyles()
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
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	)
}

export default App
