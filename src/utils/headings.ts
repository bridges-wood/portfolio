import { slugify } from '@lib/posts'

export interface Heading {
	text: string
	slug: string
}

export const getHeadings = (source: string): Heading[] => {
	// Get all h1-h6 headings
	const headingLines = source.split('\n').filter((e) => e.startsWith('#'))

	// Get the text and slug of each heading
	return headingLines.map((raw) => {
		const text = raw.replace(/^#+\s*/, '')
		const slug = slugify(text)

		return {
			text,
			slug,
		}
	})
}
