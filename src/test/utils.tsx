import { Provider } from 'react-redux'
import { makeStore } from 'store'
import { render as rtlRender } from "@testing-library/react";
import type { RootState } from 'store'
import type { ReactElement, ReactNode } from 'react'
import type { Store } from '@reduxjs/toolkit'
import type { RenderOptions } from "@testing-library/react";

interface ExtendedRenderOptions extends RenderOptions {
	initialState?: Partial<RootState>
}

const withProvider = (store: Store) => {
	const storeRender = ({ children }: { children?: ReactNode }) => (
		<Provider store={store}>{children}</Provider>
	);
	return storeRender;
};

const render = (component: ReactElement, { initialState, ...renderOptions }: ExtendedRenderOptions = { initialState: {} }) => {
	const store = makeStore({ initialState })

	return {
		store,
		render: rtlRender(component, {
			wrapper: withProvider(store),
			...renderOptions
		})
	}
}

export * from '@testing-library/react'
export { render }
