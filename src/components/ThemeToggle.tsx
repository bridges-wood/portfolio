import React, { useEffect } from 'react'
import useStoredState from '../hooks/useStoredState'

type ThemeName = 'light' | 'dark'

const ThemeToggle = () => {
	const themes: ThemeName[] = ['light', 'dark']
	const [currentTheme, setCurrentTheme] = useStoredState<ThemeName>({
		fallback: undefined,
		key: 'theme',
		toString: JSON.stringify,
		fromString: JSON.parse,
	})

	useEffect(() => {
		if (!currentTheme) {
			const updateTheme = (e: MediaQueryListEvent) => {
				const nextTheme: ThemeName = e.matches ? 'dark' : 'light'
				setCurrentTheme(nextTheme)
				document.body.className = `theme--${nextTheme}`
			}

			window
				.matchMedia('(prefers-color-scheme: dark)')
				.addEventListener('change', updateTheme)

			return () =>
				window
					.matchMedia('(prefers-color-scheme: dark)')
					.removeEventListener('change', updateTheme)
		}
	}, [currentTheme])

	useEffect(() => {
		function cleanUpTransition(this: HTMLElement, event: TransitionEvent) {
			if (document.getElementById('__next') === event.target)
				document.body.classList.remove('arriving')
		}

		document.body.addEventListener('transitionend', cleanUpTransition)
		document.body.className = `theme--${currentTheme} arriving`

		return () =>
			document.body.removeEventListener('transitionend', cleanUpTransition)
	}, [currentTheme])

	const advanceTheme: React.MouseEventHandler = (
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault()
		const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length]
		setCurrentTheme(nextTheme)
	}

	return (
		<div className={`theme-toggle ${currentTheme}`} onClick={advanceTheme}>
			<div className={`arc ${currentTheme}`} />
			<div className={`darc ${currentTheme}`} />
			{Array(8)
				.fill(0)
				.map((_value, index) => (
					<div className={`ray-${index + 1} ${currentTheme}`} key={index} />
				))}
		</div>
	)
}

export default ThemeToggle
