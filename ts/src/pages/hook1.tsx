import React from "react"
import Link from "next/link"
import useCounter from "src/hooks/useCounter"

const DemoPage = () => {
	const { count, increment } = useCounter()
	const onClick = () => increment()
	return (
		<main className="flex justify-center items-center flex-col">
			<Link href="/about">
				<button
					className="bg-gray-500 hover:bg-gray-400 px-3 py-2 mb-5 text-white rounded focus:outline-none"
					data-testid="about-btn">
					About
				</button>
			</Link>
			<div className="flex cursor-pointer mb-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
					onClick={onClick}
					data-testid="add-counter">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 4v16m8-8H4"
					/>
				</svg>
			</div>
			<p>Count: {count}</p>
		</main>
	)
}
export default DemoPage
