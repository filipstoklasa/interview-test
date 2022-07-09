import { recordsApi } from "./api";
import type { Record } from "@prisma/client";

type RecordResponse = { data: Record[]; count: number };

export const records = recordsApi.injectEndpoints({
	endpoints: (build) => ({
		getRecords: build.query<RecordResponse, { programType?: string }>({
			query: ({ programType }) => `records?programTypeId=${programType}`,
			providesTags: ["Record"],
		}),
	}),
});

export const { useGetRecordsQuery } = records;
