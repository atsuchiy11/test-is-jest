import React from "react"
import Link from "next/link"
import { Post as Props } from "src/interfaces/Types"

const Post: React.FC<Props> = ({ id, title }) => {
	return (
		<div>
			<span>{id}</span>
			{" : "}
			<Link href={`/posts/${id}`}>
				<a className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">
					{title}
				</a>
			</Link>
		</div>
	)
}
export default Post
