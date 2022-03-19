import React from "react"
import { useState, useEffect } from "react"

export type useMyNameReturnType = {
	setName: React.Dispatch<React.SetStateAction<string>>
	message: string
}

const useMyName = (initialName: string) => {
	const [currentName, setCurrentName] = useState(initialName)

	useEffect(() => setCurrentName(initialName), [initialName])

	return {
		setName: setCurrentName,
		message: `My name is ${currentName}`,
	}
}
export default useMyName
