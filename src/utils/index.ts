/**
 * Removes all characters following the first occurrence of the specified key from a string, if it exists (including the key itself).
 *
 * @param str The string
 * @param key The key to search for
 * @returns The string with all characters following the first occurrence of the specified key removed (including the key itself)
 */
export function removeAfterLast<T>(str: string, key: string): string | T {
	const i = str.lastIndexOf(key)
	if (i === -1) {
		return str
	} else {
		return str.substring(0, i)
	}
}
