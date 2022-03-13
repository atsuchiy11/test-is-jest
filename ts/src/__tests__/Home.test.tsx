import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "src/pages/index"

it("Should render hello next", () => {
	render(<Home />)
	// screen.debug()
	expect(screen.getByText("Welcome to Nextjs")).toBeInTheDocument()
})
