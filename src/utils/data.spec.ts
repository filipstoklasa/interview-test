import {
	seriesData,
	moviesData,
	getProgramTypeData,
	getPagedData,
} from "./data";
import { ProgramTypes } from "constants/programTypes";

describe("[seriesData] - Check series data", () => {
	it("[seriesData] - Data contains only programType series", () => {
		expect(
			seriesData.every((datum) => datum.programType === ProgramTypes.series)
		).toBe(true);
	});
	it("[seriesData] - Gets series data based on programType enum", () => {
		expect(getProgramTypeData(ProgramTypes.series)).toHaveLength(
			seriesData.length
		);
	});
});

describe("[moviesData] - Check movies data", () => {
	it("[moviesData] - Data contains only programType movie", () => {
		expect(
			moviesData.every((datum) => datum.programType === ProgramTypes.movie)
		).toBe(true);
	});

	it("[moviesData | getProgramTypeData] - Gets movie data based on programType enum", () => {
		expect(getProgramTypeData(ProgramTypes.movie)).toHaveLength(
			moviesData.length
		);
	});
});

describe("[getProgramTypeData] returns undefined when passed unknown string or undefined", () => {
	it("[getProgramTypeData] - returns undefined", () => {
		expect(getProgramTypeData("notExisting")).toBe(undefined);
		expect(getProgramTypeData(undefined)).toBe(undefined);
	});
});

describe("[getPagedData | seriesData | moviesData] returns specific page of provided data", () => {
	it("[getPagedData | seriesData | moviesData] - returns first page with size of 10", () => {
		expect(getPagedData(seriesData, 1)).toHaveLength(10);
		expect(getPagedData(moviesData, 1)).toHaveLength(10);
	});

	it("[getPagedData | seriesData] - returns empty array when out of pages", () => {
		expect(getPagedData(seriesData, 100)).toHaveLength(0);
	});
});
