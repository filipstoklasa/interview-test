import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URLs } from "store/api/constants/urls";
import { ReducerPaths } from "store/slices/constants/reducerPaths";

export enum Tags {
	YearFact = "YearFact",
}

const apiNumbers = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: URLs.numbers,
	}),
	reducerPath: ReducerPaths.numbers,
	tagTypes: [Tags.YearFact],
	endpoints: (build) => ({
		getYearFact: build.query<string, string>({
			query: (year) => ({
				url: `/${year}/year`,
				responseHandler: (response) => response.text(),
			}),
			providesTags: (_post, _err, year) => [{ type: Tags.YearFact, year }],
		}),
	}),
});

export default apiNumbers;
