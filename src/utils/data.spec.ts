import {
	seriesData,
	moviesData,
	getProgramTypeData,
	getPagedData,
} from "./data";
import { ProgramTypes } from "constants/programTypes";

describe("Check series data", () => {
	it("Data contains only programType series", () => {
		expect(
			seriesData.every((datum) => datum.programType === ProgramTypes.series)
		).toBe(true);
	});
	it("Gets series data based on programType enum", () => {
		expect(getProgramTypeData(ProgramTypes.series)).toHaveLength(
			seriesData.length
		);
	});
});

describe("Check movies data", () => {
	it("Data contains only programType movie", () => {
		expect(
			moviesData.every((datum) => datum.programType === ProgramTypes.movie)
		).toBe(true);
	});

	it("Gets movie data based on programType enum", () => {
		expect(getProgramTypeData(ProgramTypes.movie)).toHaveLength(
			moviesData.length
		);
	});
});

describe("[getPagedData] returns undefined when passed unknown string or undefined", () => {
	it("[getPagedData] - returns undefined", () => {
		expect(getProgramTypeData("notExisting")).toBe(undefined);
		expect(getProgramTypeData(undefined)).toBe(undefined);
	});
});

describe("[getPagedData] returns specific page of provided data", () => {
	it("[getPagedData] - returns first page with size of 10", () => {
		expect(getPagedData(seriesData, 1)).toHaveLength(10);
		expect(getPagedData(moviesData, 1)).toHaveLength(10);
	});

	it("[getPagedData] - returns empty array when out of pages", () => {
		expect(getPagedData(seriesData, 100)).toHaveLength(0);
	});
});
