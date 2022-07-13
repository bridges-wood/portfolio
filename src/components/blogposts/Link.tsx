import { Badge } from '@components/badge'
import NavLink, { NavLinkProps } from '@components/NavLink'
import { Spacer, useTheme } from '@nextui-org/react'
import { NativeAttributes } from '@typings'
import { FC, PropsWithChildren, useEffect, useMemo, useRef } from 'react'
import { LinkContainer } from './blogposts.styles'

interface Props {
	route: NavLinkProps
	level?: number
	isMobile?: boolean
	onClick?: () => void
}

export type PostProps = Props & NativeAttributes<Props>

const BlogpostLink: FC<PropsWithChildren<PostProps>> = ({
	isMobile = false,
	route,
	level = 1,
	onClick,
}) => {
	const selectedRef = useRef<HTMLDivElement>(null)
	const ref = route.selected ? selectedRef : null
	const { theme, isDark } = useTheme()

	useEffect(() => {
		if (ref?.current && !isMobile) {
			const content = document.querySelector(
				'.sidebar-content'
			) as HTMLDivElement

			// 32 is the top and bottom margin for `.link`
			const height = ref.current.offsetTop - 32

			if (content) {
				content.scrollTo({
					top: height - content.offsetHeight / 2,
					behavior: 'smooth',
				})
			}
		}
	}, [ref, isMobile])

	const linkColor = useMemo(() => {
		if (route.selected) return
		if (route.comingSoon) return theme.colors.accents3.value
		return theme.colors.accents6.value
	}, [
		route.selected,
		route.comingSoon,
		theme.colors.accents3.value,
		theme.colors.accents6.value,
	])

	return (
		<LinkContainer
			ref={ref}
			className={`link level-${level}`}
			selected={route?.selected}
			disabled={route?.comingSoon}
		>
			<NavLink {...route} color={linkColor} onClick={onClick} />
			<Spacer inline x={0.2} />
			{route?.newPost ? (
				<Badge className='post__new-badge' type='primary'>
					New
				</Badge>
			) : null}
			{route?.updated ? (
				<Badge className='post__updated-badge' type='secondary'>
					Updated
				</Badge>
			) : null}
			{route?.comingSoon ? (
				<Badge className='post__coming-soon-badge' type='disabled'>
					Coming Soon
				</Badge>
			) : null}
		</LinkContainer>
	)
}

export default BlogpostLink
