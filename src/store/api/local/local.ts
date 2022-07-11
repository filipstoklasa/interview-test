import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { URLs } from "store/api/constants/urls";
import type { Record, ProgramType } from "@prisma/client";
import type { ApiListResponse } from "types/common/Api";
import { ReducerPaths } from "store/slices/constants/reducerPaths";

export enum Tags {
	Records = "Records",
	ProgramTypes = "ProgramTypes",
}

const apiLocal = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: URLs.local,
	}),
	reducerPath: ReducerPaths.local,
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	tagTypes: [Tags.Records, Tags.ProgramTypes],
	endpoints: (build) => ({
		getRecords: build.query<ApiListResponse<Record>, { programType?: string }>({
			query: ({ programType }) => `/records?programTypeId=${programType}`,
			providesTags: [Tags.Records],
		}),
		getProgramTypes: build.query<ApiListResponse<ProgramType>, void>({
			query: () => "/programTypes",
			providesTags: [Tags.ProgramTypes],
		}),
	}),
});

export default apiLocal;
