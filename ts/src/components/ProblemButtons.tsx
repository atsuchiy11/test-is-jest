import React from "react"
import { useRouter } from "next/router"

interface Props {
	id: number
}

const ProblemButtons: React.FC<Props> = ({ id }) => {
	const router = useRouter()
	const onPrev = () =>
		router.push({ hash: String(id - 1) }, undefined, { shallow: true })
	const onNext = () =>
		router.push({ hash: String(id + 1) }, undefined, { shallow: true })

	return (
		<div className="flex justify-between">
			<button
				className="bg-gray-500 hover:bg-gray-400 px-3 py-2 mb-5 mr-2 text-white rounded focus:outline-none"
				data-testid="answer-btn">
				Check Answer
			</button>
			<div>
				{id > 1 && (
					<button
						className="bg-slate-100 hover:bg-slate-300 px-3 py-2 mb-5 mr-2 rounded focus:outline-none"
						data-testid="prev-btn"
						onClick={onPrev}>
						Prev
					</button>
				)}
				<button
					className="bg-slate-100 hover:bg-slate-300 px-3 py-2 mb-5 mr-2 rounded focus:outline-none"
					data-testid="next-btn"
					onClick={onNext}>
					Next
				</button>
			</div>
		</div>
	)
}
export default ProblemButtons
