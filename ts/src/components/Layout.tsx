import React from "react"
import Head from "next/head"
import Link from "next/link"

const routes = [
	{ href: "/", testid: "home-nav", name: "Home" },
	{ href: "/blog-page", testid: "blog-nav", name: "Blog" },
	{ href: "/comment-page", testid: "comment-nav", name: "Comment" },
	{ href: "/context-page", testid: "context-nav", name: "Context" },
	{ href: "/task-page", testid: "task-nav", name: "ToDos" },
]

interface Props {
	title: string
}

const Layout: React.FC<Props> = ({ children, title = "Nextjs" }) => {
	return (
		<div className="flex justify-center items-center flex-col min-h-screen font-mono">
			<Head>
				<title>{title}</title>
			</Head>
			<header>
				<nav className="bg-gray-800 w-screen">
					<div className="flex items-center pl-8 h-14">
						<div className="flex space-x-4">
							{routes.map((route) => (
								<Link href={route.href} key={route.testid}>
									<a
										data-testid={route.testid}
										className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
										{route.name}
									</a>
								</Link>
							))}
						</div>
					</div>
				</nav>
			</header>
			<main className="flex flex-1 justify-center items-center flex-col w-screen">
				{children}
			</main>
			<footer className="w-full h-12 flex justify-center items-center flex-col border-t">
				<a
					className="flex items-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by Vercel
				</a>
			</footer>
		</div>
	)
}
export default Layout
