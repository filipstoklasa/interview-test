import { reducer, setError, initialState } from "./error";

const error = "errorReducer";

describe("[Error reducer] - Test error reducer", () => {
	it("[Error reducer] - should return the initial state", () => {
		//@ts-ignore
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it("[Error reducer] - sets the error message", () => {
		expect(reducer(initialState, setError(error))).toEqual({
			...initialState,
			error,
		});
	});

	it("[Error reducer] - remove the error", () => {
		expect(reducer({ ...initialState, error }, setError(null))).toEqual(
			initialState
		);
	});
});
