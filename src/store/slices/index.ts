import { combineReducers } from "@reduxjs/toolkit";
import { reducer as modal } from "./modal";
import { reducer as error } from "./error";
import { apiNumbers, apiLocal } from "store/api";

export const reducer = combineReducers({
	[apiLocal.reducerPath]: apiLocal.reducer,
	[apiNumbers.reducerPath]: apiNumbers.reducer,
	modal,
	error,
});
