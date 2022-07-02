import ThemeToggle from '@components/ThemeToggle'
import { Link } from '@nextui-org/react'

const Navbar = () => {
	return (
		<div>
			<Link href='/'>
				<img className='brand-image' src='/images/logo.png' alt='Max Wood' />
			</Link>
			<div />
			<div className='break' />
			<div>
				<div>
					<Link href='/projects'>
						<span className='Link'>Projects</span>
					</Link>
					<Link href='/posts'>
						<span className='Link'>Blog</span>
					</Link>
					<Link href='/contact'>
						<span className='Link'>Contact</span>
					</Link>
					<Link href='/acknowledgements'>
						<span className='Link'>Acknowledgements</span>
					</Link>

					<ThemeToggle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
