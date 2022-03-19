import React from "react"
import "isomorphic-fetch"
import useSWR from "swr"
import Layout from "src/components/Layout"
import Comment from "src/components/Comment"
import { Comment as Props } from "src/interfaces/Types"

const fetchComments = async () => {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/comments?_limit=10"
	)
	const comments: Props[] = await res.json()
	return comments
}

const CommentPage: React.FC = () => {
	const { data: comments, error } = useSWR("commentsFetch", fetchComments)

	if (error) return <span>Error!</span>

	return (
		<Layout title="Comment">
			<p className="text-4xl">comment page</p>
			<ul>
				{comments &&
					comments.map((comment) => <Comment key={comment.id} {...comment} />)}
			</ul>
		</Layout>
	)
}
export default CommentPage
