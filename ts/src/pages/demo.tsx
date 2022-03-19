import React from "react"
import useHash from "src/hooks/useHash"

const DemoPage: React.FC = () => {
	const [hash, setHash] = useHash()
	return (
		<>
			<p>Current hash = {hash}</p>
			<input type="text" onChange={(e) => setHash(e.target.value)} />
		</>
	)
}
export default DemoPage
