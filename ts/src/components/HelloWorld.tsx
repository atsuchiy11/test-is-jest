import React, { useState } from "react"

const HelloWorld = () => {
	const [title, _] = useState("Hello, World")
	return <h1>{title}</h1>
}
export default HelloWorld
