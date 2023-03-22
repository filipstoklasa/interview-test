import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Names } from "./constants/names";

interface ErrorInitialState {
	error: string | null;
}

export const initialState: ErrorInitialState = {
	error: null,
};

export const {
	reducer,
	actions: { setError },
} = createSlice({
	name: Names.error,
	initialState,
	reducers: {
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
	},
});
