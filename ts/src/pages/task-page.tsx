import React from "react"
import Layout from "src/components/Layout"
import "isomorphic-fetch"
import { GetStaticProps } from "next"
import { getAllTasksData } from "src/lib/fetch"
import useSWR from "swr"
import { Task } from "src/interfaces/Types"

interface StaticProps {
	staticTasks: Task[]
}

const fetchTasks = async () => {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/todos?_limit=10"
	)
	const comments: Task[] = await res.json()
	return comments
}

const TaskPage: React.FC<StaticProps> = ({ staticTasks }) => {
	const { data: tasks, error } = useSWR("todosFetch", fetchTasks, {
		fallbackData: staticTasks,
		revalidateOnMount: true,
	})

	if (error) return <span>Error!</span>

	return (
		<Layout title="ToDos">
			<p className="text-4xl mb-10">todos page</p>
			<ul>
				{tasks &&
					tasks.map((task) => (
						<li key={task.id}>
							{task.id}
							{": "}
							<span>{task.title}</span>
						</li>
					))}
			</ul>
		</Layout>
	)
}
export default TaskPage

export const getStaticProps: GetStaticProps = async () => {
	const staticTasks = await getAllTasksData()
	return {
		props: { staticTasks },
	}
}
