import React, { useState } from 'react'

type ThemeName = 'default' | 'dark'

const ThemeToggle = () => {
	const themes: ThemeName[] = ['default', 'dark']
	const [currentTheme, setCurrentTheme] = useState<ThemeName>('default')

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
