import React from "react"
import userEvent from "@testing-library/user-event"
import { getPage } from "next-page-tester"
import { render, screen } from "@testing-library/react"
import { renderHook, RenderResult } from "@testing-library/react-hooks"
import { act } from "react-test-renderer"

import DemoPage from "src/pages/hook1"
import useCounter, { useCounterReturnType } from "src/hooks/useCounter"

describe("demo page", () => {
	test("Linkボタンをクリックしたら/aboutページ遷移する(next/link)", async () => {
		const { page } = await getPage({ route: "/hook1" })
		render(page)
		userEvent.click(screen.getByTestId("about-btn"))
		expect(await screen.findByText("about page")).toBeInTheDocument()
	})

	test("rendered", () => {
		render(<DemoPage />)
		expect(screen.getByTestId("about-btn")).toBeInTheDocument()
		expect(screen.getByTestId("add-counter")).toBeInTheDocument()
	})

	describe("Should use counter", () => {
		// test間で使い回すので型定義しておく
		let result: RenderResult<useCounterReturnType>
		beforeEach(() => {
			result = renderHook(() => useCounter()).result
		})

		test("初期状態の確認", () => {
			expect(result.current.count).toBe(0)
			expect(typeof result.current.increment).toBe("function")
		})

		test("incrementしたら+1される", () => {
			// useStateの更新関数を呼び出す
			act(() => result.current.increment())
			expect(result.current.count).toBe(1)
		})
	})
})
