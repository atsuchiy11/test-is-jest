import React from "react"
import { useStateContext } from "src/context/StateProvider"

const ContextB: React.FC = () => {
	const { toggle } = useStateContext()
	return (
		<>
			<p>Context B</p>
			<p className="mb-5 text-indigo-600" data-testid="toggle-b">
				{toggle ? "true" : "false"}
			</p>
		</>
	)
}
export default ContextB
