/**
 * Parse a date string in the format YYYY-MM-DD to a Date object.
 * @param date The date string to parse.
 * @returns The parsed Date object.
 */
export const parseDate = (date: string): Date => {
	const [year, month, day] = date.split('-')
	return new Date(Number(year), Number(month) - 1, Number(day))
}
