import { Menu } from "src/__tests__/foo.test"

export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0)

export const timesTwo = (n: number) => {
	return n * 2
}

export const order = (items: Menu[]) => {
	const total = items.reduce((price, item) => price + item.price, 0)
	return {
		orderItems: items,
		total,
	}
}
