import chance from "chance";

export function randint(max) {
	return chance.integer({ min: 0, max });
}
