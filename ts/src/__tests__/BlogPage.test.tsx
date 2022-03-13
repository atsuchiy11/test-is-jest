import { render, screen, cleanup } from "@testing-library/react"
import { getPage, initTestHelpers } from "next-page-tester"
import { rest } from "msw"
import { setupServer } from "msw/node"

initTestHelpers()

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
]
const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => {
	server.resetHandlers()
	cleanup()
})
afterAll(() => server.close())

describe("Blog page", () => {
	test("Should render the list of blogs pre-fetched by getStaticProps", async () => {
		const { page } = await getPage({ route: "/blog-page" })
		render(page)
		expect(await screen.findByText("blog page")).toBeInTheDocument()
		expect(screen.getByText("dummy title 1")).toBeInTheDocument()
		expect(screen.getByText("dummy title 2")).toBeInTheDocument()
	})
})
