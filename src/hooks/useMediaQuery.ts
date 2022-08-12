import { NextUITheme, useTheme } from '@nextui-org/react'
import { useCallback, useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
	const [targetReached, setTargetReached] = useState(false)

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true)
		} else {
			setTargetReached(false)
		}
	}, [])

	useEffect(() => {
		const media = window.matchMedia(query)
		media.addEventListener('change', updateTarget)

		if (media.matches) {
			setTargetReached(true)
		}
		return () => media.removeEventListener('change', updateTarget)
	}, [setTargetReached, updateTarget, query])

	return targetReached
}

export const useBreakpoint = (breakpoint: keyof NextUITheme['breakpoints']) => {
	const { theme } = useTheme()
	return useMediaQuery(`(max-width: ${theme.breakpoints[breakpoint].value})`)
}

export const useIsMobile = () => useMediaQuery('(max-width: 960px)')

export default useMediaQuery
