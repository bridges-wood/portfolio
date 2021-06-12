import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { Children, ReactPortal } from 'react'

interface ComponentProps extends React.PropsWithChildren<LinkProps> {
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
		<Link {...props}>
			{React.cloneElement(child, {
				className: className || null,
			})}
		</Link>
	)
}

export default NavLink
