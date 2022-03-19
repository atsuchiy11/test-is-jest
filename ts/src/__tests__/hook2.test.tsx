import React from "react"
import userEvent from "@testing-library/user-event"
import { getPage } from "next-page-tester"
import { render, screen } from "@testing-library/react"
import { renderHook, RenderResult } from "@testing-library/react-hooks"
import { act } from "react-test-renderer"

import DemoPage from "src/pages/hook2"
import useMyName, { useMyNameReturnType } from "src/hooks/useMyName"

describe("demo page", () => {
	describe("UI integration", () => {
		test("Linkボタンをクリックしたら/aboutページ遷移する(next/link)", async () => {
			const { page } = await getPage({ route: "/hook2" })
			render(page)
			userEvent.click(screen.getByTestId("about-btn"))
			expect(await screen.findByText("about page")).toBeInTheDocument()
		})

		test("rendered", () => {
			render(<DemoPage />)
			expect(screen.getByTestId("about-btn")).toBeInTheDocument()
			expect(screen.getByTestId("hello-btn")).toBeInTheDocument()
		})

		test("ボタンをクリックしたらmessageが更新されるか", async () => {
			render(<DemoPage />)
			expect(screen.getByText("My name is John")).toBeInTheDocument()
			// テキストボックスに入力する
			userEvent.type(screen.getByRole("textbox"), "Nancy")
			// イベント発火
			userEvent.click(screen.getByTestId("hello-btn"))
			// UI上でmessageが更新されたか
			expect(await screen.findByText("My name is Nancy"))
		})
	})

	describe("Should use MyName", () => {
		let result: RenderResult<useMyNameReturnType>
		beforeEach(() => {
			result = renderHook((initialName: string) => useMyName(initialName), {
				initialProps: "John",
			}).result
		})

		test("初期値の確認", () => {
			expect(result.current.message).toBe("My name is John")
			expect(typeof result.current.setName).toBe("function")
		})

		test("setNameを呼び出したらmessageが更新されるか", () => {
			// useStateの更新関数を呼び出す
			act(() => result.current.setName("Nancy"))
			expect(result.current.message).toBe("My name is Nancy")
		})
	})
})
