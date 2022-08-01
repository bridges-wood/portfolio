import { useCallback, useEffect, useRef } from 'react'

/**
 * Generates a random number between min and max.
 * @param min
 * @param max
 * @returns random number between min and max (inclusive)
 */
const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min

const useRandomInterval = (
	callback: () => void,
	minInterval: number,
	maxInterval: number
) => {
	const timeoutID = useRef<number>(null)
	const savedCallback = useRef<Function>(callback)

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		const handleTick = () => {
			const nextTickAt = random(minInterval, maxInterval)

			timeoutID.current = window.setTimeout(() => {
				savedCallback.current()
				handleTick()
			}, nextTickAt)
		}

		handleTick()

		return () => window.clearTimeout(timeoutID.current)
	}, [minInterval, maxInterval])

	const cancel = useCallback(() => {
		window.clearTimeout(timeoutID.current)
	}, [])

	return cancel
}

export default useRandomInterval
