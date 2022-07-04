import { combineReducers } from "@reduxjs/toolkit";
import { reducer as modal } from "./modal";
import { reducer as error } from "./error";
import { api } from "api/rtk";

export const reducer = combineReducers({
	modal,
	error,
	[api.reducerPath]: api.reducer,
});
