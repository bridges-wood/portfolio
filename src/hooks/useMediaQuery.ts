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

export default useMediaQuery
