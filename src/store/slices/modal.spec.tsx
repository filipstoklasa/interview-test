import {
	reducer,
	setModalYear,
	resetModalYear,
	initialState,
	getFact,
} from "./modal";
import { configureStore } from "@reduxjs/toolkit";

const year = "2017";

describe("Test modal reducer", () => {
	it("should return the initial state", () => {
		//@ts-ignore
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it("sets modal year", () => {
		expect(reducer(initialState, setModalYear(year))).toEqual({
			...initialState,
			year,
		});
	});
	it("set reset modal", () => {
		expect(reducer({ ...initialState, year }, resetModalYear())).toEqual(
			initialState
		);
	});

	it("fetches api data with thunk action", async () => {
		const store = configureStore({
			reducer,
		});

		await store.dispatch(getFact(year));
		const state = store.getState();

		expect(state).not.toEqual(initialState);
	});
});
