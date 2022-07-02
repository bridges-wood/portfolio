import { useTheme } from '@nextui-org/react'
import github from '../svg/github.svg'
import Icon from './index'

const GithubIcon = () => {
	const { type } = useTheme()

	return (
		<Icon
			className={`icon github ${type}`}
			href='https://github.com/bridges-wood'
			icon={github({})}
		/>
	)
}

export default GithubIcon
