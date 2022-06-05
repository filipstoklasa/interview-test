import { api } from "api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Names } from "./constants/names";
import { setError } from "./error";

type ModalInitialState = {
	year: string | null;
	loading: boolean;
	fact: string | null;
	error: string | null;
};

export const initialState: ModalInitialState = {
	year: null,
	loading: false,
	fact: null,
	error: null,
};

export const getFact = createAsyncThunk<
	string,
	string,
	{ dispatch: any; rejectWithValue: any }
>(
	`${Names.modal}/setModalId`,
	async (year: string, { dispatch, rejectWithValue }) => {
		try {
			dispatch(setModalYear(year));
			const response = await api.get(`/${year}/year`);
			return response.data;
		} catch (err) {
			console.log(err);
			dispatch(setError("Error when fetching fact has occured"));
			return rejectWithValue(
				"We are sorry, but we could find fact, you were searching for."
			);
		}
	}
);

export const {
	reducer,
	actions: { resetModalYear, setModalYear },
} = createSlice({
	name: Names.modal,
	initialState,
	reducers: {
		resetModalYear: (state) => {
			state.year = null;
		},
		setModalYear: (state, action: PayloadAction<string>) => {
			state.year = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFact.pending, (state) => {
				state.loading = true;
			})
			.addCase(getFact.fulfilled, (state, action: PayloadAction<string>) => {
				state.fact = action.payload;
				state.loading = false;
			})
			.addCase(getFact.rejected, (state, action: PayloadAction<unknown>) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});
