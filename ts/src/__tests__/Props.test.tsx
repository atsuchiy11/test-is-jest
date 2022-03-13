import React from "react"
import { render, screen } from "@testing-library/react"
import Post from "src/components/Post"
import { Post as Props } from "src/interfaces/Types"

describe("Post component with given props", () => {
	let dummyProps: Props
	beforeEach(() => {
		dummyProps = {
			userId: 1,
			id: 1,
			title: "dummy title 1",
			body: "dummy title 2",
		}
	})
	test("Should render correctly with given props value", () => {
		render(<Post {...dummyProps} />)
		expect(screen.getByText(dummyProps.id)).toBeInTheDocument()
		expect(screen.getByText(dummyProps.title)).toBeInTheDocument()
	})
})
