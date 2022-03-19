import React from "react"
import { render, screen } from "@testing-library/react"
import { getPage } from "next-page-tester"
import userEvent from "@testing-library/user-event"
import Home from "src/pages/index"

describe("IndexPage rendered", () => {
	test("titleとbuttonがレンダリングされる", () => {
		render(<Home />)
		expect(
			screen.getByText("Learn JavaScript, one puzzle at a time.")
		).toBeInTheDocument()
		expect(screen.getByText("Start Now!")).toBeInTheDocument()
	})

	test("開始buttonをクリックしたら/problem#1にルーティングされる /Link", async () => {
		const { page } = await getPage({ route: "/index" })
		render(page)
		userEvent.click(screen.getByTestId("start-btn"))
		expect(await screen.findByText("Problem #1")).toBeInTheDocument()
	})
})
