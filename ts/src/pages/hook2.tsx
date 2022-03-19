import React, { useRef } from "react"
import Link from "next/link"
import useMyName from "src/hooks/useMyName"

const DemoPage = () => {
	const name = useRef<HTMLInputElement>(null)
	const { setName, message } = useMyName("John")
	const onClick = () => {
		if (name.current?.value) setName(name.current.value)
	}
	return (
		<main className="flex justify-center items-center flex-col">
			<Link href="/about">
				<button
					className="bg-gray-500 hover:bg-gray-400 px-3 py-2 mb-5 text-white rounded focus:outline-none"
					data-testid="about-btn">
					About
				</button>
			</Link>
			<div className="flex justify-center items-center flex-col">
				<input
					className="input input-bordered w-full max-w-xs mb-5"
					type="text"
					placeholder="Please Your Name"
					ref={name}
				/>
				<button className="btn mb-5" onClick={onClick} data-testid="hello-btn">
					Say Hello
				</button>
				<p>{message}</p>
			</div>
		</main>
	)
}
export default DemoPage
