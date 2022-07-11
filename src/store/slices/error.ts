import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerPaths } from "./constants/reducerPaths";

type ErrorInitialState = {
	error: string | null;
};

export const initialState: ErrorInitialState = {
	error: null,
};

export const {
	reducer,
	actions: { setError },
} = createSlice({
	name: ReducerPaths.error,
	initialState,
	reducers: {
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
	},
});
