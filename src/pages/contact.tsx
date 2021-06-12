import React from 'react'

const Contact = () => {
	return (
		<div className='contact'>
			<div className='border-wrapper'>
				<div className='info-wrapper'>
					<address>
						<span className='name'>Max Wood</span>
						<hr />
						<a className='link' href='mailto:bridges.wood@gmail.com'>
							<span className='email-address'>bridges.wood@gmail.com</span>
						</a>
						<br />
						<div className='pad' />
						<span className='signature'>MW</span>
					</address>
				</div>
			</div>
		</div>
	)
}

export default Contact
