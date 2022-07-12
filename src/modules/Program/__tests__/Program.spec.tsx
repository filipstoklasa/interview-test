import { Program } from "../index";
import { render, screen, cleanup, waitFor, fireEvent } from "test/utils";
import { setupListeners } from '@reduxjs/toolkit/query'
import { rest } from "msw";
import { setupServer } from "msw/node";
import { APIUrls } from "store/api/constants/urls";
import { Urls } from "store/api/local/constants/urls";
import type { AppStore } from 'store'
import type { Record } from "@prisma/client";
import type { ApiListResponse } from 'types'

jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: { programType: 1 },
			asPath: "",
			isReady: true,
			push: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		};
	},
}));

const MOCKED_ITEMS: Record[] = [{ title: "Test Item", description: "Test Desc", releaseYear: 2022, id: 1, programTypeId: 1 }]
const MOCKED_RESPONSE = { count: 1, data: MOCKED_ITEMS } as ApiListResponse<Record>

let cleanupListeners: () => void
let store: AppStore | undefined
const server = setupServer(
	rest.get(`${APIUrls.local}${Urls.getRecords()}`, async (_, res, ctx) => {
		return res(ctx.json(MOCKED_RESPONSE));
	}),
);

beforeAll(() => {
	server.listen();
})

beforeEach(() => {
	if (store && cleanupListeners) {
		cleanupListeners = setupListeners(store.dispatch)
	}
})

afterAll(() => {
	server.close();
})

afterEach(() => {
	cleanup()
	cleanupListeners && cleanupListeners()
	server.resetHandlers();
})

test("[Program component] - renders program types", async () => {
	render(<Program />)
	await waitFor(() => {
		const item = screen.getByText("Test Item")
		expect(item).toBeVisible()
	})
})