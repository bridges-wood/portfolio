export interface Heading {
	text: string
	id: string
}

export const getHeadings = (): Heading[] => {
	const headings = document.getElementsByClassName(
		'linked-heading'
	) as HTMLCollection
	return Array.from(headings).map((e: HTMLHtmlElement) => {
		return {
			id: e.id,
			text: e.getAttribute('data-name'),
		}
	}) as Heading[]
}
