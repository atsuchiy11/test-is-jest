import { render, screen } from "@testing-library/react"
import { getPage } from "next-page-tester"
import { problems } from "src/storage/problems"

describe("Problem Page", () => {
	const problem1 = problems.find((problem) => problem.id === 1)
	const problem2 = problems.find((problem) => problem.id === 2)
	if (!problem1 || !problem2) return

	describe("#1", () => {
		beforeEach(async () => {
			const { page } = await getPage({ route: "/problem#1" })
			render(page)
		})
		test("#1の問題が表示される /problem", async () => {
			expect(
				await screen.findByText(`Problem #${problem1.id}`)
			).toBeInTheDocument()
			expect(screen.getByText(problem1.description)).toBeInTheDocument()
			expect(screen.getByText(problem1.code)).toBeInTheDocument()
		})
		test("#1はPrevボタンが表示ない /buttons", async () => {
			expect(await screen.findByTestId("answer-btn")).toBeInTheDocument()
			// 要素が存在しない
			expect(screen.queryByTestId("prev-btn")).toBeNull()
			expect(screen.getByTestId("next-btn")).toBeInTheDocument()
		})
	})
	describe("#2", () => {
		beforeEach(async () => {
			const { page } = await getPage({ route: "/problem#2" })
			render(page)
		})
		test("#2はPrevボタンも表示される /buttons", async () => {
			expect(await screen.findByTestId("answer-btn")).toBeInTheDocument()
			expect(screen.getByTestId("prev-btn")).toBeInTheDocument()
			expect(screen.getByTestId("next-btn")).toBeInTheDocument()
		})
	})
})
