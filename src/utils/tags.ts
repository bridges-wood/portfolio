/**
 * Convert a tag name to a slug.
 * @param tag The tag name to convert.
 * @returns The slug.
 */
export const tagToSlug = (tag: string) => {
	return tag.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
}
