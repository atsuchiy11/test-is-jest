import "isomorphic-fetch"
import { useState, useCallback, useEffect } from "react"

export type useFetchReturnType = {
	name: string
	weight: number
}

const useFetch = (id: number) => {
	const [data, setData] = useState<useFetchReturnType | null>(null)

	const fetchData = useCallback(async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		const data = await res.json()
		setData({
			name: data.name,
			weight: data.weight,
		})
	}, [id])

	useEffect(() => {
		fetchData()
		return () => setData(null)
	}, [fetchData])

	return { data }
}
export default useFetch
