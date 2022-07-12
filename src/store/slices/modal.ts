import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerPaths } from "./constants/reducerPaths";

type ModalInitialState = {
	year: string | null
};

export const initialState: ModalInitialState = {
	year: null,
};

export const {
	reducer,
	actions: { resetModalYear, setModalYear },
} = createSlice({
	name: ReducerPaths.modal,
	initialState,
	reducers: {
		resetModalYear: (state) => {
			state.year = null;
		},
		setModalYear: (state, action: PayloadAction<string>) => {
			state.year = action.payload;
		},
	},
});
