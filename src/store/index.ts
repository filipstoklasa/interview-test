import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { apiLocal, apiNumbers } from "store/api";
import { createWrapper } from "next-redux-wrapper";
import { reducer } from "./slices";

export const makeStore = () =>
	configureStore({
		reducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(apiLocal.middleware, apiNumbers.middleware),
	});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
