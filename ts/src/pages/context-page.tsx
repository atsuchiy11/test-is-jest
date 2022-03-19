import React from "react"
import Layout from "src/components/Layout"
import { StateProvider } from "src/context/StateProvider"
import ContextA from "src/components/ContextA"
import ContextB from "src/components/ContextB"

const ContextPage: React.FC = () => {
	return (
		<Layout title="Context">
			<p className="text-4xl mb-10">context page</p>
			<StateProvider>
				<ContextA />
				<ContextB />
			</StateProvider>
		</Layout>
	)
}
export default ContextPage
