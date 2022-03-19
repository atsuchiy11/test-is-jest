import "isomorphic-fetch"
import { Post, Task } from "src/interfaces/Types"

const endpoint = "https://jsonplaceholder.typicode.com"

export const getAllPostData = async () => {
	const res = await fetch(`${endpoint}/posts?_limit=10`)
	const posts: Post[] = await res.json()
	return posts
}

export const getAllTasksData = async () => {
	const res = await fetch(`${endpoint}/todos?_limit=10`)
	const todos: Task[] = await res.json()
	return todos
}

export const getAllPostIds = async () => {
	const res = await fetch(`${endpoint}/posts?_limit=10`)
	const posts: Post[] = await res.json()
	return posts.map((post) => ({
		params: {
			id: String(post.id),
		},
	}))
}

export const getPostData = async (id: string) => {
	const res = await fetch(`${endpoint}/posts/${id}`)
	const post: Post = await res.json()
	return post
}
