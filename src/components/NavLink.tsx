import { useRouter } from 'next/router'
import React, { Children, ReactPortal } from 'react'
import { NavLink as NavLinkBootstrap, NavLinkProps } from 'react-bootstrap'

interface ComponentProps extends React.PropsWithChildren<NavLinkProps> {
	activeClassName?: string
}

const NavLink = ({ children, activeClassName, ...props }: ComponentProps) => {
	// TODO figure out how to remove transition when link gains or loses active status
	const { asPath } = useRouter()

	const child = Children.only(children) as ReactPortal
	const childClassName = child.props.className || ''
	const isActive = asPath === props.href || asPath === props.as

	const className = isActive
		? `${childClassName} ${activeClassName}`.trim()
		: childClassName

	return (
		<NavLinkBootstrap {...props}>
			{React.cloneElement(child, {
				className: className || null,
			})}
		</NavLinkBootstrap>
	)
}

export default NavLink
