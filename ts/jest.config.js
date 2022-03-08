module.exports = {
	roots: ["<rootDir>/src"],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx}js)",
	],
	transform: {
		"^.*\\.(ts|tsx)$": "ts-jest",
	},
	moduleDirectories: ["node_modules", "."],
	moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
	clearMocks: true,
	restoreMocks: true,
}
