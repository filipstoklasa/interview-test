import data from "resources/data.json";
import { ProgramTypes } from "constants/programTypes";

const pageSize = 10;

export const seriesData = data.entries.filter(
	(item) => item.programType === ProgramTypes.series
);

export const moviesData = data.entries.filter(
	(item) => item.programType === ProgramTypes.movie
);

export const getProgramTypeData = (
	programType: ProgramTypes | string | undefined
) => {
	switch (programType) {
		case ProgramTypes.movie:
			return moviesData;
		case ProgramTypes.series:
			return seriesData;
		default:
			return undefined;
	}
};

export const getPagedData = (data: any[], page: number) => [
	...data.slice(page * pageSize, page * pageSize + pageSize),
];
