import {
	reducer,
	setModalYear,
	resetModalYear,
	initialState,
	getFact,
} from "./modal";
import { configureStore } from "@reduxjs/toolkit";

const year = "2017";

jest.setTimeout(10000);

describe("[Modal reducer] - Test modal reducer", () => {
	it("[Modal reducer] - should return the initial state", () => {
		//@ts-ignore
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it("[Modal reducer] - sets modal year", () => {
		expect(reducer(initialState, setModalYear(year))).toEqual({
			...initialState,
			year,
		});
	});
	it("[Modal reducer] - set reset modal", () => {
		expect(reducer({ ...initialState, year }, resetModalYear())).toEqual(
			initialState
		);
	});

	it("[Modal reducer] - fetches api data with thunk action", async () => {
		const store = configureStore({
			reducer,
		});

		await store.dispatch(getFact(year));
		const state = store.getState();

		expect(state).not.toEqual(initialState);
	});
});
