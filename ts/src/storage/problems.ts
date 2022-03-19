export interface Problem {
	id: number
	description: string
	code: string
}

export const problems: Problem[] = [
	{
		id: 1,
		description: "What is truth?",
		code: "function problem() { return __; }",
	},
	{
		id: 2,
		description: "Simple Math",
		code: "function problem() { return 42 === 6 * __; }",
	},
]
