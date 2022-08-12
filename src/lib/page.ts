import { removeAfterLast } from '@utils/index'

export interface Route {
	title: string
	subtitle?: string
	section?: string
	heading: boolean
	keywords?: string[]
	icon?: string
	open?: boolean
	path?: string
	routes?: Route[]
	updated: boolean
	newPost?: boolean
	comingSoon?: boolean
}

export interface RouteContext {
	parent?: Route
	route: Route
	nextRoute?: Route
	prevRoute?: Route
}

export interface Carry {
	params: { slug: any }
}

export const addTagToSlug = (slug: string, tag?: string): string => {
	return tag ? slug.replaceAll('/posts', `/posts/tag/${tag}`) : slug
}

export const findRouteByPath = (
	path: string,
	routes: Route[]
): Route | null | undefined => {
	for (const route of routes) {
		if (route.path && removeAfterLast(route.path, '.') === path) {
			return route
		}

		const childPath = route.routes ? findRouteByPath(path, route.routes) : null
		if (childPath) {
			return childPath
		}
	}
}

export const getPaths = (
	nextRoutes: Route[],
	carry: Carry[] = [{ params: { slug: [] } }]
) => {
	nextRoutes.forEach((route) => {
		if (route.comingSoon) {
			return
		}

		if (route.path) {
			carry.push(removeAfterLast(route.path, '.') as Carry)
		} else if (route.routes) {
			getPaths(route.routes, carry)
		}
	})

	return carry
}
