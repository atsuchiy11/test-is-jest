import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import { SWRConfig } from "swr"
import { rest } from "msw"
import { setupServer } from "msw/node"
import TaskPage from "src/pages/task-page"
import { Task } from "src/interfaces/Types"

const server = setupServer(
	rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					userId: 1,
					id: 1,
					title: "Task A",
					completed: false,
				},
				{
					userId: 1,
					id: 2,
					title: "Task B",
					completed: true,
				},
			])
		)
	})
)
beforeAll(() => server.listen())
afterEach(() => {
	server.resetHandlers()
	cleanup()
})
afterAll(() => server.close())

describe("Todos page / useSWR", () => {
	const staticProps: Task[] = [
		{
			userId: 3,
			id: 3,
			title: "Static task C",
			completed: true,
		},
		{
			userId: 4,
			id: 4,
			title: "Static task D",
			completed: false,
		},
	]
	test("Should render CSF data after pre-renderd data", async () => {
		render(
			<SWRConfig value={{ dedupingInterval: 0 }}>
				<TaskPage staticTasks={staticProps} />
			</SWRConfig>
		)
		expect(await screen.findByText("Static task C")).toBeInTheDocument()
		expect(screen.getByText("Static task D")).toBeInTheDocument()
		expect(await screen.findByText("Task A")).toBeInTheDocument()
		expect(screen.getByText("Task B")).toBeInTheDocument()
	})

	test("Should render Error text when fetch failed", async () => {
		server.use(
			rest.get(
				"https://jsonplaceholder.typicode.com/todos",
				(req, res, ctx) => {
					return res(ctx.status(400))
				}
			)
		)
		render(
			<SWRConfig value={{ dedupingInterval: 0 }}>
				<TaskPage staticTasks={staticProps} />
			</SWRConfig>
		)
		expect(await screen.findByText("Error!")).toBeInTheDocument()
	})
})
