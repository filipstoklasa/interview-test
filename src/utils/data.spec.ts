import { seriesData } from "./data";

describe("1", () => {
	it("2", () => {
		expect(seriesData.every((datum) => datum.programType === "series")).toBe(true);
	});
});
