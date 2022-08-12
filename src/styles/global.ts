import { createTheme, globalCss } from '@nextui-org/react'

const globalStyles = globalCss({
	html: {
		scrollBehavior: 'smooth',
		'@media (prefers-reduced-motion: reduce)': {
			scrollBehavior: 'auto',
		},
	},
	h1: {
		fontWeight: 'lighter !important',
	},
	'@font-face': [
		{
			fontFamily: 'Roboto',
			src: 'url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap)',
		},
		{
			fontFamily: 'Nothing You Could Do',
			src: ' url(https://fonts.gstatic.com/s/nothingyoucoulddo/v15/oY1B8fbBpaP5OX3DtrRYf_Q2BPB1SnfZb3OOnVs.woff2) format("woff2")',
		},
	],
})

export const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			gradient: 'linear-gradient(45deg, #f5e004, #f02cec)',
			textGradient: '45deg, #f5e004, #f02cec',
		},
	},
})
export const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {
			gradient: 'linear-gradient(45deg, #f5e004, #f02cec)',
			textGradient: '45deg, #f5e004, #f02cec',
		},
	},
})

export default globalStyles
