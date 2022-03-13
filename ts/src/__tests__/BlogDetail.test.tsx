import { render, screen, cleanup } from "@testing-library/react"
import { getPage, initTestHelpers } from "next-page-tester"
import { rest } from "msw"
import { setupServer } from "msw/node"
import userEvent from "@testing-library/user-event"

initTestHelpers()

const apis = ["1", "2"].map((id) =>
	rest.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
		(req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json({
					userId: id,
					id: id,
					title: `dummy title ${id}`,
					body: `dummy body ${id}`,
				})
			)
		}
	)
)

const handlers = [
	rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					userId: 1,
					id: 1,
					title: "dummy title 1",
					body: "dummy body 1",
				},
				{
					userId: 2,
					id: 2,
					title: "dummy title 2",
					body: "dummy body 2",
				},
			])
		)
	}),
	...apis,
]
const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => {
	server.resetHandlers()
	cleanup()
})
afterAll(() => server.close())

describe("Blog detail page", () => {
	test("Should render detailed contesnt of each ID", async () => {
		for (const id of ["1", "2"]) {
			const { page } = await getPage({ route: `/posts/${id}` })
			render(page)
			expect(await screen.findByText(`dummy title ${id}`)).toBeInTheDocument()
			expect(screen.getByText(`dummy body ${id}`)).toBeInTheDocument()
		}
	})
	test("Should route back to blog-page from detail page", async () => {
		const { page } = await getPage({
			route: "/posts/2",
		})
		render(page)
		await screen.findByText("dummy title 2")
		userEvent.click(screen.getByTestId("back-blog"))
		expect(await screen.findByText("blog page")).toBeInTheDocument()
	})
})
