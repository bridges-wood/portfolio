import { useEffect, useState } from 'react'

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		setScrollPosition(typeof window !== 'undefined' ? window.scrollY : 0)

		const handleScroll = () => {
			requestAnimationFrame(() => {
				setScrollPosition(window.scrollY)
			})
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return scrollPosition
}

export default useScrollPosition
