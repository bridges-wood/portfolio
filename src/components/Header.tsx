import Link from 'next/link'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
	return (
		<div>
			<Navbar expand='sm' sticky='top' collapseOnSelect>
				<Navbar.Brand>
					<Link href='/'>
						<img alt='Max Wood' />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse>
					<Nav className='mr-auto'>
						<Link href='/projects'>Projects</Link>
						<Link href='/about'>About</Link>
						<Link href='/contact'>Contact</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default Header
