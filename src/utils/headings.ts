import { slugify } from '@lib/posts'

export interface Heading {
	text: string
	slug: string
}

export const getHeadings = (): Heading[] => {
	const headings = document.getElementsByClassName(
		'linked-heading'
	) as HTMLCollection

	return Array.from(headings).map((e: HTMLHtmlElement) => {
		return {
			text: e.getAttribute('data-name'),
			slug: slugify(e.getAttribute('data-name')),
		}
	}) as Heading[]
}
