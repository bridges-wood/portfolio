import { Switch, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'

const ThemeToggle = () => {
	const { setTheme } = useNextTheme()
	const { isDark } = useTheme()

	return (
		<Switch
			checked={isDark}
			onChange={(ev) => setTheme(ev.target.checked ? 'dark' : 'light')}
			iconOn={<i className='bx bxs-sun'></i>}
			iconOff={<i className='bx bxs-moon'></i>}
		/>
	)
}

export default ThemeToggle
