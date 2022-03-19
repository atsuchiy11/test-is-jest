import React from "react"
import { Comment as Props } from "src/interfaces/Types"

const Comment: React.FC<Props> = ({ id, name, body }) => {
	return (
		<li className="mx-10">
			<p className="">
				{id}
				{": "}
				{body}
			</p>
			<p className="text-center mt-3 mb-10">
				{"by "}
				{name}
			</p>
		</li>
	)
}
export default Comment
