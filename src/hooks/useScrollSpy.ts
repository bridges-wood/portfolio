import { useEffect, useRef, useState } from 'react'

/**
 * ! Currently not working as intended - see issue #15
 * Hook to detect when the user scrolls to a certain element.
 * @param selectors - array of selectors to watch
 * @param options - options for the IntersectionObserver
 * @returns the id of the element that is currently in view
 */
export const useScrollSpy = (
	selectors: string[],
	options?: IntersectionObserverInit
) => {
	const [activeId, setActiveId] = useState<string | null>()
	const observer = useRef<IntersectionObserver>()

	useEffect(() => {
		const elements = selectors.map((selector) =>
			document.querySelector(selector)
		)

		if (observer.current) observer.current.disconnect()

		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry?.isIntersecting) {
					const id = entry.target.getAttribute('id')
					setActiveId(id)
				}
			})
		}, options)
		elements.forEach((element) => {
			if (element) observer.current.observe(element)
		})

		return () => observer.current?.disconnect()
	}, [selectors, options, setActiveId])

	return activeId
}

export default useScrollSpy
