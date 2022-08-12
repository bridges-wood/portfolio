import slugifyLib from 'slugify'

/**
 * @link https://github.com/microsoft/vscode-wordcount/blob/main/extension.ts
 * Counts the number of words in a MDX file.
 *
 * @param text The text of the blogpost to be parsed.
 */
export const countWords = (text: string) => {
	// Parse out unwanted whitespace
	text = text.replace(/(< ([^>]+)<)/g, '').replace(/\s+/g, ' ')
	text = text.replace(/^\s\s*/, '').replace(/\s\s*$/, '')

	let wordCount = 0
	if (text !== '') {
		wordCount = text.split(' ').length
	}

	return wordCount
}

/**
 * Estimates the reading time of a blogpost.
 * @param wordCount The number of words in the blogpost.
 * @param wordsPerMinute The number of words per minute of the reader.
 * @returns An estimate of the time it will take to read the blogpost.
 */
export const readingTime = (
	wordCount: number,
	wordsPerMinute: number = 130
): string => {
	const minutes = Math.round(wordCount / wordsPerMinute)
	if (minutes === 0) {
		return 'Less than a minute'
	} else {
		return `${minutes} minute${minutes === 1 ? '' : 's'}`
	}
}

/**
 * Converts a string to a slug, removing special characters and replacing spaces with dashes.
 * @param str The string to slugify.
 * @returns A slugified string.
 */
export const slugify = (str: string): string => {
	return slugifyLib(str, { lower: true })
}

/**
 * Converts a slug string into a capitalised string.
 * @param slug The slug to be formatted
 * @returns A formatted slug.
 */
export const formatSlug = (slug: string): string => {
	return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}
