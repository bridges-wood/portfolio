import { BlogpostLink } from '@components/blogposts'
import Heading from '@components/Heading'
import { NavLinkProps } from '@components/NavLink'
import { useIsMobile } from '@hooks'
import { addTagToSlug, Route } from '@lib/page'
import { NativeAttributes } from '@typings'
import { removeAfterLast } from '@utils'
import { FC } from 'react'

interface Props {
	routes?: Route[]
	level?: number
	tag?: string
	slug?: string
	onPostClick?: (route: Route) => void
}

export type SidebarProps = Props & NativeAttributes<Props>

const getCategoryPath = (routes: Route[]): string => {
	const route = routes.find((r) => r.path)
	return route && route.path ? removeAfterLast(route.path, '/') : ''
}

const Sidebar: FC<SidebarProps> = ({
	routes,
	level = 1,
	tag = '',
	slug = '',
	onPostClick,
}) => {
	const isMobile = useIsMobile()

	return (
		<>
			{routes?.map(
				({
					path,
					title,
					icon,
					routes,
					newPost,
					comingSoon,
					updated,
					heading,
					open,
				}) => {
					if (routes) {
						const pathname = getCategoryPath(routes)
						const categorySelected = slug.startsWith(pathname)
						const opened = categorySelected || isMobile ? false : open

						if (heading) {
							return (
								<Heading key={pathname} title={title}>
									<Sidebar
										routes={routes}
										level={level + 1}
										tag={tag}
										slug={slug}
										onPostClick={onPostClick}
									/>
								</Heading>
							)
						}

						return (
							<Sidebar
								key={pathname}
								routes={routes}
								level={level + 1}
								tag={tag}
								slug={slug}
								onPostClick={onPostClick}
							/>
						)
					}

					const href = '/posts/[[...slug]]'
					const pagePath: string | undefined =
						path && removeAfterLast(path, '.')
					const pathname = pagePath && addTagToSlug(pagePath, tag)
					const selected = pagePath && pagePath === slug

					const route: NavLinkProps = {
						href,
						path,
						title,
						pathname,
						selected,
						comingSoon,
						updated,
						newPost,
						heading: false,
					} as NavLinkProps

					return (
						<BlogpostLink
							key={title}
							isMobile={isMobile}
							level={level}
							route={route}
							onClick={() => {
								if (onPostClick)
									onPostClick({ ...route, heading: false } as Route)
							}}
						/>
					)
				}
			)}
		</>
	)
}

export default Sidebar
