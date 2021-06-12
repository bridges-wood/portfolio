import React, { useEffect, useState } from 'react'

type ThemeName = 'light' | 'dark'

const ThemeToggle = () => {
	const themes: ThemeName[] = ['light', 'dark']
	const [currentTheme, setCurrentTheme] = useState<ThemeName>('light')

	useEffect(() => {
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
	}, [])

	const advanceTheme: React.MouseEventHandler = (
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault()
		const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length]
		setCurrentTheme(nextTheme)
		document.body.className = `theme--${nextTheme}`
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
