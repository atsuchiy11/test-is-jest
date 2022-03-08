import { sum, timesTwo, order } from "src/foo"

export type Menu = {
	id: string
	name: string
	price: number
}

const menuItems: Menu[] = [
	{
		id: "1",
		name: "Tapped Up Turkey Burger",
		price: 19.5,
	},
	{
		id: "2",
		name: "Lobster Lollipops",
		price: 16.5,
	},
	{
		id: "3",
		name: "Motley Que Pulled Pork Sandwich",
		price: 21.5,
	},
	{
		id: "4",
		name: "Trash Can Nachos",
		price: 19.5,
	},
]

describe("demo test", () => {
	test("basic", () => {
		expect(sum()).toBe(0)
	})

	test("basic again", () => {
		expect(sum(1, 2)).toBe(3)
	})

	test("multiplies by two", () => {
		expect(timesTwo(4)).toBe(8)
	})

	test("Build an order object", () => {
		const result = {
			orderItems: menuItems,
			total: 77,
		}
		expect(order(menuItems)).toEqual(result)
	})
})
