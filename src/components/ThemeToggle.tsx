import { Switch, SwitchProps, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { FC } from 'react'

type ThemeToggleProps = Partial<
	Omit<SwitchProps, 'checked' | 'onChange' | 'iconOn' | 'iconOff'>
>

const ThemeToggle: FC<ThemeToggleProps> = (props) => {
	const { setTheme } = useNextTheme()
	const { isDark } = useTheme()

	return (
		<Switch
			checked={isDark}
			onChange={(ev) => setTheme(ev.target.checked ? 'dark' : 'light')}
			iconOn={<i className='bx bxs-sun' />}
			iconOff={<i className='bx bxs-moon' />}
			{...props}
		/>
	)
}

export default ThemeToggle
