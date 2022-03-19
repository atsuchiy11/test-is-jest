import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { problems, Problem } from "src/storage/problems"

export type useProblemReturnType = [problem: Problem | null]

export const useProblem = () => {
	const router = useRouter()
	const [problem, setProblem] = useState<Problem | null>(null)

	useEffect(() => {
		const hashNumber = Number(router.asPath.split("#")[1])
		const targetProblem = problems.find((p) => p.id === hashNumber)
		if (targetProblem) {
			setProblem(targetProblem)
		}
		return () => setProblem(null)
	}, [router.asPath])

	return [problem] as useProblemReturnType
}
