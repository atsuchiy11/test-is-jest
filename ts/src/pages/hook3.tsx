import React, { useState, useRef } from "react"
import Link from "next/link"
import useFetch from "src/hooks/useFetch"

const DemoPage = () => {
	const input = useRef<HTMLInputElement>(null)
	const [id, setId] = useState(149)
	const { data: pokemon } = useFetch(id)
	const onClick = () => {
		if (input.current?.value && !isNaN(Number(input.current.value))) {
			setId(Number(input.current.value))
		} else {
			window.alert("Require number")
		}
	}

	if (!pokemon) return <p>Loading...</p>

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
					ref={input}
				/>
				<button className="btn mb-5" onClick={onClick} data-testid="get-btn">
					get
				</button>
			</div>
			<p className="mb-5">name: {pokemon.name}</p>
			<p className="mb-5">weight: {pokemon.weight}</p>
		</main>
	)
}
export default DemoPage
