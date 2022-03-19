import React from "react"
import ProblemButtons from "./ProblemButtons"
import { useProblem } from "src/hooks/useProblem"

const ProblemView = () => {
	const [problem] = useProblem()

	if (!problem) return <p>Problem Not Found</p>
	return (
		<>
			<h3 className="text-4xl mb-4" data-testid="title">
				Problem #{problem.id}
			</h3>
			<p className="text-2xl mb-6" data-testid="description">
				{problem.description}
			</p>
			<div className="bg-gray-500 mockup-code mb-6">
				<pre>
					<code data-testid="code">{problem.code}</code>
				</pre>
			</div>
			<form className="form-control mb-6">
				<textarea className="textarea textarea-info text-xl"></textarea>
			</form>
			<ProblemButtons id={problem.id} />
		</>
	)
}
export default ProblemView
