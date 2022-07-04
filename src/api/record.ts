import { api } from "./rtk";
import type { Record } from "@prisma/client";

type RecordResponse = { data: Record[]; count: number };

export const recordsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getRecords: build.query<RecordResponse, { programType?: string }>({
			query: ({ programType }) => `records?programTypeId=${programType}`,
			providesTags: ["Record"],
		}),
	}),
});

export const { useGetRecordsQuery } = recordsApi;
