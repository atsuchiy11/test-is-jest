/**
 * For Next.js
 * @see https://nextjs.org/docs/testing
 */
const nextJest = require("next/jest")

const createJestConfig = nextJest({ dir: "./src" })
const customJestConfig = {
	testPathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/node_modules"],
	moduleDirectories: ["node_modules", "<rootDir>/"],
	// moduleNameMapper: {
	// 	"\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
	// },
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
}
module.exports = createJestConfig(customJestConfig)

/**
 * For Babel
 * @see https://nextjs.org/docs/testing
 */
// module.exports = {
// 	roots: ["<rootDir>/src"],
// 	testEnvironment: "jsdom",
// 	moduleDirectories: ["node_modules", "."],
// 	testMatch: [
// 		"**/__tests__/**/*.+(ts|tsx|js)",
// 		"**/?(*.)+(spec|test).+(ts|tsx}js)",
// 	],
// 	transform: {
// 		"^.*\\.(ts|tsx)$": "ts-jest",
// 	},
// 	moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
// 	setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
// 	clearMocks: true,
// 	restoreMocks: true,
// }
