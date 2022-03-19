import { useRouter } from "next/router"
import { useCallback } from "react"

export type useHashReturnType = [
	hash: string,
	setHash: (newHash: string) => void
]

const useHash = () => {
	const router = useRouter()
	const hash = router.asPath.split("#")[1]

	const setHash = useCallback((newHash) => {
		router.push({ hash: newHash }, undefined, { shallow: true })
	}, [])
	return [hash, setHash] as useHashReturnType
}
export default useHash
