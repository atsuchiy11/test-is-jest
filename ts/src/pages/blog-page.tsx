import React from "react"
import Layout from "src/components/Layout"
import Post from "src/components/Post"
import { GetStaticProps } from "next"
import { Post as POST } from "src/interfaces/Types"
import { getAllPostData } from "src/lib/fetch"

interface StaticProps {
	posts: POST[]
}

const BlogPage: React.FC<StaticProps> = ({ posts }) => {
	return (
		<Layout title="Blog">
			<p className="text-4xl mb-10">blog page</p>
			<ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
		</Layout>
	)
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getAllPostData()
	return {
		props: { posts },
	}
}
