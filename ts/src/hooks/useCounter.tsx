import { useState, useCallback } from "react"

export type useCounterReturnType = {
	count: number
	increment: () => void
}

const useCounter = () => {
	const [count, setCount] = useState(0)
	const increment = useCallback(() => setCount((n) => n + 1), [])
	return { count, increment } as useCounterReturnType
}
export default useCounter
