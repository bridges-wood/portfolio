import ThemeToggle from '@components/ThemeToggle'
import React from 'react'
import {
	Nav,
	Navbar as NavBarBootstrap,
	NavbarBrand,
	NavLink,
} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/NavbarToggle'

const Navbar = () => {
	return (
		<NavBarBootstrap expand='md'>
			<NavbarBrand href='/'>
				<img className='brand-image' src='/images/logo.png' alt='Max Wood' />
			</NavbarBrand>
			<NavbarToggle />
			<div className='break' />
			<NavbarCollapse>
				<Nav>
					<NavLink href='/projects' className='link'>
						<span className='link'>Projects</span>
					</NavLink>
					<NavLink href='/posts'>
						<span className='link'>Blog</span>
					</NavLink>
					<NavLink href='/contact'>
						<span className='link'>Contact</span>
					</NavLink>
					<NavLink href='/acknowledgements'>
						<span className='link'>Acknowledgements</span>
					</NavLink>
					<Nav.Item bsPrefix='toggle-container nav-item'>
						<ThemeToggle />
					</Nav.Item>
				</Nav>
			</NavbarCollapse>
		</NavBarBootstrap>
	)
}

export default Navbar
