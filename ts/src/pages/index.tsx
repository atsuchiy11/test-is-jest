import React from "react"
import Link from "next/link"
import Layout from "src/components/Layout"

const Home: React.FC = () => {
	return (
		<Layout title="Home">
			<p className="text-4xl mb-10">Learn JavaScript, one puzzle at a time.</p>
			<Link href="/problem#1">
				<button
					className="bg-gray-500 hover:bg-gray-400 px-3 py-2 mb-5 text-white rounded focus:outline-none"
					data-testid="start-btn">
					Start Now!
				</button>
			</Link>
		</Layout>
	)
}
export default Home
