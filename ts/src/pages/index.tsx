import React from "react"
import Layout from "src/components/Layout"

// import Link from "next/link"

const Home: React.FC = () => {
	return (
		<Layout title="Home">
			<p className="text-4xl">Welcome to Nextjs</p>
		</Layout>
	)
}
export default Home

// const LandingPage = () => {
// 	return (
// 		<main className="container mx-auto">
// 			<h3 className="text-4xl mb-6">Learn JavaScript, one puzzle at a time.</h3>
// 			<Link href="/problem#1">
// 				<button className="btn" >
// 					Start Now!
// 				</button>
// 			</Link>
// 		</main>
// 	)
// }
// export default LandingPage
