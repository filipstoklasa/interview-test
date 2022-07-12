import { DetailModal } from "./index";
import { render, screen, cleanup, fireEvent, waitFor } from "test/utils";
import { setupListeners } from '@reduxjs/toolkit/query'
import { rest } from "msw";
import { setupServer } from "msw/node";
import { APIUrls } from "store/api/constants/urls";
import { Urls } from "store/api/numbers/constants/urls";
import type { AppStore } from 'store'

const initialState = {
	modal: {
		year: "2022",
	},
};

const MOCKED_RESPONSE = "Mocked response for the fact of the year"

let cleanupListeners: () => void
let store: AppStore | undefined
const server = setupServer(
	rest.get(`${APIUrls.numbers}${Urls.getYearFact({ params: { year: initialState.modal.year } })}`, async (_, res, ctx) => {
		return res(ctx.text(MOCKED_RESPONSE));
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

test("[Detail modal component] - modal of fact of the year", async () => {
	render(<DetailModal />, { initialState });

	expect(
		screen.getByText("Fact for year " + initialState.modal.year)
	).toBeVisible();

	await waitFor(() => {
		expect(screen.getByText(MOCKED_RESPONSE)).toBeVisible();
	})

	fireEvent.click(screen.getByTestId("CloseIcon"));
	expect(screen.queryByTestId("dialog")).not.toBeInTheDocument();
});
