import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useState } from "react"

interface Problem {
	id: number
	description: string
	code: string
}

const problems: Problem[] = [
	{
		id: 1,
		description: "What is truth?",
		code: "function problem() { return __; }",
	},
	{
		id: 2,
		description: "Simple Math",
		code: "function problem() { return 42 === 6 * __; }",
	},
]

const ProblemView = () => {
	const router = useRouter()
	const [problem, setProblem] = useState({} as Problem)

	useEffect(() => {
		const hashNumber = router.asPath.split("#")[1]
		const targetProblem = problems.find((p) => p.id === Number(hashNumber))
		if (targetProblem) {
			setProblem(targetProblem)
		}
	}, [router.asPath])

	return (
		<main className="container mx-auto">
			<h3 className="text-4xl mb-4" data-testid="title">
				Problem #{problem.id}
			</h3>
			<p className="text-2xl mb-6" data-testid="description">
				{problem.description}
			</p>
			<div className="mockup-code mb-6">
				<pre>
					<code data-testid="code">{problem.code}</code>
				</pre>
			</div>
			<form className="form-control mb-6">
				<textarea className="textarea textarea-info text-xl"></textarea>
			</form>
			<button data-testid="start-btn" className="btn">
				Check Answer
			</button>
		</main>
	)
}
export default ProblemView
