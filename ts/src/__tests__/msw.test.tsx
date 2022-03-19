import "isomorphic-fetch"
import { cleanup } from "@testing-library/react"
import { rest } from "msw"
import { setupServer } from "msw/node"

/** テスト対象の関数 */
const getPokemon = async (id: number) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
	const pokemon = await res.json()
	return pokemon
}

/** Web APIのmock */
const handlers = [
	rest.get("https://pokeapi.co/api/v2/pokemon/149", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				name: "dragonite",
				weight: 2100,
			})
		)
	}),
]

/** mockサーバー */
const mockServer = setupServer(...handlers)
// インターセプト開始
beforeAll(() => mockServer.listen())
afterEach(() => {
	mockServer.resetHandlers()
	cleanup()
})
// インターセプト終了
afterAll(() => mockServer.close())

// テスト
describe("getPokemon", () => {
	test("ポケモンの名前と体重を返す", async () => {
		const result = await getPokemon(149)
		expect(result).toEqual({ name: "dragonite", weight: 2100 })
	})
})
