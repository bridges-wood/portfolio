import Link from 'next/link'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
	return (
		<div>
			<Navbar expand='sm' sticky='top' collapseOnSelect>
				<Navbar.Brand>
					<Link href='/'>
						<img className='brand' src='/images/logo.png' alt='Max Wood' />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse>
					<Nav className='mr-auto'>
						<Link href='/projects' passHref>
							<a className='link'>Projects</a>
						</Link>
						<Link href='/about' passHref>
							<a className='link'>About</a>
						</Link>
						<Link href='/contact' passHref>
							<a className='link'>Contact</a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default Header
