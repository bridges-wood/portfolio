import React from 'react'
import github from '../svg/github.svg'
import Icon from './index'

const GithubIcon = () => (
	<Icon
		className='icon github'
		href='https://github.com/bridges-wood'
		icon={github({})}
	/>
)

export default GithubIcon
