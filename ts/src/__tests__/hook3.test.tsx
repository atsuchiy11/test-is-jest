import React from "react"
import userEvent from "@testing-library/user-event"
import { getPage } from "next-page-tester"
import { render, screen } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"
import { rest } from "msw"
import { setupServer } from "msw/node"
import useFetch from "src/hooks/useFetch"
import DemoPage from "src/pages/hook3"

window.alert = jest.fn(() => "Require number")

interface Params {
	[key: string]: {
		name: string
		weight: number
	}
}
const params: Params = {
	"149": {
		name: "dragonite",
		weight: 2100,
	},
	"150": {
		name: "mewtwo",
		weight: 1220,
	},
}

const handlers = Object.keys(params).map((id) => {
	return rest.get(
		`https://pokeapi.co/api/v2/pokemon/${id}`,
		(req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json({
					name: params[id].name,
					weight: params[id].weight,
				})
			)
		}
	)
})
const mockServer = setupServer(...handlers)

beforeAll(() => mockServer.listen())
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())

describe("demo page", () => {
	describe("UI integration", () => {
		test("Linkボタンをクリックしたら/aboutページ遷移する(next/link)", async () => {
			const { page } = await getPage({ route: "/hook3" })
			render(page)
			expect(await screen.findByTestId("about-btn")).toBeInTheDocument()
			userEvent.click(screen.getByTestId("about-btn"))
			expect(await screen.findByText("about page")).toBeInTheDocument()
		})

		test("rendered", async () => {
			render(<DemoPage />)
			expect(await screen.findByTestId("about-btn")).toBeInTheDocument()
			expect(screen.getByTestId("get-btn")).toBeInTheDocument()
		})

		test("GETボタンをクリックしたらdataが更新されるか", async () => {
			render(<DemoPage />)
			expect(await screen.findByTestId("get-btn")).toBeInTheDocument()
			// テキストボックスに入力する
			userEvent.type(screen.getByRole("textbox"), "150")
			// イベント発火
			userEvent.click(screen.getByTestId("get-btn"))
			// UI上でmessageが更新されたか
			expect(await screen.findByText("name: mewtwo")).toBeInTheDocument()
			expect(screen.getByText("weight: 1220")).toBeInTheDocument()
		})

		test("inputが空の場合アラートが表示されるか", async () => {
			render(<DemoPage />)
			expect(await screen.findByTestId("get-btn")).toBeInTheDocument()
			userEvent.click(screen.getByTestId("get-btn"))
			expect(window.alert()).toBe("Require number")
		})
	})

	describe("Should use Fetch", () => {
		test("初期値の確認&idが更新されたら再fetchされるか", async () => {
			const { result, rerender, waitForNextUpdate } = renderHook(
				(id: number) => useFetch(id),
				{
					initialProps: 149,
				}
			)
			await waitForNextUpdate()
			expect(result.current.data).toEqual({ name: "dragonite", weight: 2100 })
			// idを更新して再fetch
			rerender(150)
			await waitForNextUpdate()
			expect(result.current.data).toEqual({ name: "mewtwo", weight: 1220 })
		})

		// test("クリーンアップされるか", async () => {
		// 	const { result, unmount, waitForNextUpdate } = renderHook(
		// 		(id: number) => useFetch(id),
		// 		{
		// 			initialProps: 149,
		// 		}
		// 	)
		// 	await waitForNextUpdate()
		// 	expect(result.current.data).toEqual({ name: "dragonite", weight: 2100 })
		// 	const cleanup = jest
		// 		.spyOn(React, "useEffect")
		// 		.mockImplementationOnce(() => console.log("cleanup"))
		// 	unmount()
		// 	expect(cleanup).toHaveBeenCalledTimes(1)
		// })
	})
})
