import * as React from "react"
import { render as rtlRender, RenderOptions } from "@testing-library/react"
import { Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import configureStore from "redux-mock-store"
import { RootState } from "store"
import '@testing-library/jest-dom';

interface ExtendedRenderOptions extends RenderOptions {
	initialState: Partial<RootState>
	store?: Store<Partial<RootState>>
}

const render = (
	component: React.ReactElement,
	{
		initialState,
		store = configureStore<Partial<RootState>>([thunk])(initialState),
		...renderOptions
	}: ExtendedRenderOptions = {
			initialState: {
				/* any default state you want */
			},
		},
) => {
	return rtlRender(component, {
		wrapper: TestWrapper(store),
		...renderOptions,
	})
}

const TestWrapper = (store: Store) => {
	const storeRender = ({
		children,
	}: {
		children?: React.ReactNode
	}) => <Provider store={store}>{children}</Provider>

	return storeRender
}

export * from "@testing-library/react"
// override the built-in render with our own
export { render }