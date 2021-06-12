import NavLink from '@components/NavLink'
import ThemeToggle from '@components/ThemeToggle'
import React from 'react'

const Navbar = () => {
	return (
		<div className='navbar' id='navbar'>
			<NavLink href='/' activeClassName='active'>
				<img className='brand' src='/images/logo.png' alt='Max Wood' />
			</NavLink>
			<NavLink href='/projects' activeClassName='active'>
				<a className='link'>Projects</a>
			</NavLink>
			<NavLink href='/about' activeClassName='active'>
				<a className='link'>About</a>
			</NavLink>
			<NavLink href='/posts' activeClassName='active'>
				<a className='link'>Blog</a>
			</NavLink>
			<NavLink href='/contact' activeClassName='active'>
				<a className='link'>Contact</a>
			</NavLink>
			<ThemeToggle />
		</div>
	)
}

export default Navbar
