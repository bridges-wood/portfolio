import ThemeToggle from '@components/ThemeToggle'
import Link from 'next/link'
import React from 'react'

// TODO add color theme toggle.
const Navbar = () => {
	return (
		<div className='navbar'>
			<Link href='/'>
				<img className='brand' src='/images/logo.png' alt='Max Wood' />
			</Link>
			<Link href='/projects' passHref>
				<a className='link'>
					<span>Projects</span>
				</a>
			</Link>
			<Link href='/about' passHref>
				<a className='link'>About</a>
			</Link>
			<Link href='/posts' passHref>
				<a className='link'>Blog</a>
			</Link>
			<Link href='/contact' passHref>
				<a className='link'>Contact</a>
			</Link>
			<ThemeToggle />
		</div>
	)
}

export default Navbar
