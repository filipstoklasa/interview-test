import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIUrls } from "store/api/constants/urls";
import { Urls } from "./constants/urls";
import { ReducerPaths } from "store/slices/constants/reducerPaths";
import { QueryData } from "utils/url";

export enum Tags {
	YearFact = "YearFact",
}

const apiNumbers = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: APIUrls.numbers,
	}),
	reducerPath: ReducerPaths.numbers,
	tagTypes: [Tags.YearFact],
	endpoints: (build) => ({
		getYearFact: build.query<string, QueryData<{ year: string }>>({
			query: (data) => ({
				url: Urls.getYearFact(data),
				responseHandler: (response) => response.text(),
			}),
			providesTags: (_post, _err, year) => [{ type: Tags.YearFact, year }],
		}),
	}),
});

export default apiNumbers;
