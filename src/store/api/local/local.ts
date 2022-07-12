import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { APIUrls } from "store/api/constants/urls";
import { Urls } from "./constants/urls";
import { ReducerPaths } from "store/slices/constants/reducerPaths";
import type { Record, ProgramType } from "@prisma/client";
import type { ApiListResponse } from "types/common/Api";
import type { QueryData } from "utils/url";

export enum Tags {
	Records = "Records",
	ProgramTypes = "ProgramTypes",
}

const apiLocal = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: APIUrls.local,
	}),
	reducerPath: ReducerPaths.local,
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	tagTypes: [Tags.Records, Tags.ProgramTypes],
	endpoints: (build) => ({
		getRecords: build.query<
			ApiListResponse<Record>,
			QueryData<void, { programType?: string }>
		>({
			query: Urls.getRecords,
			providesTags: [Tags.Records],
		}),
		getProgramTypes: build.query<ApiListResponse<ProgramType>, void>({
			query: Urls.getProgramTypes,
			providesTags: [Tags.ProgramTypes],
		}),
	}),
});

export default apiLocal;
