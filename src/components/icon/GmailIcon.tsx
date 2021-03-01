import React from 'react'
import gmail from '../svg/gmail.svg'
import Icon from './'

const GmailIcon = () => (
	<Icon
		className='icon gmail'
		href='mailto:bridges.wood@gmail.com'
		icon={gmail({})}
	/>
)

export default GmailIcon
