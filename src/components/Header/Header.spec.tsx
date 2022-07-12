import { render, screen, waitFor, cleanup } from "test/utils";
import { setupListeners } from '@reduxjs/toolkit/query'
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Header } from "./index";
import { STATIC_PAGES } from "constants/menu";
import { APIUrls } from "store/api/constants/urls";
import { Urls } from "store/api/local/constants/urls";
import type { ProgramType } from "@prisma/client";
import type { ApiListResponse } from 'types'
import type { AppStore } from 'store'

const MOCKED_ITEM = { title: "Test Item", href: "/test-item" }
const MOCKED_PAGES = [...STATIC_PAGES, MOCKED_ITEM]
const MOCKED_RESPONSE = { count: 1, data: [{ name: MOCKED_ITEM.title, id: 1 }] } as ApiListResponse<ProgramType>

jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: "",
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


let cleanupListeners: () => void
let store: AppStore | undefined
const server = setupServer(
	rest.get(`${APIUrls.local}${Urls.getProgramTypes()}`, async (_, res, ctx) => {
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

test("[Header component] - Header display menu items with links", async () => {
	render(<Header />)
	expect(screen.getByTestId("progress")).toBeVisible();

	await waitFor(() => {
		for (let i of MOCKED_PAGES) {
			expect(screen.getByText(i.title)).toBeVisible();
		}
	})

});
