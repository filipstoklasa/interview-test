import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import type { Store } from "redux";
import type { RootState } from "store";
import type { ReactElement, ReactNode } from "react";

interface ExtendedRenderOptions extends RenderOptions {
	initialState: Partial<RootState>;
	store?: Store<Partial<RootState>>;
}

const render = (
	component: ReactElement,
	{
		initialState,
		store = configureStore<Partial<RootState>>([thunk])(initialState),
		...renderOptions
	}: ExtendedRenderOptions = {
		initialState: {
			/* any default state you want */
		},
	}
) => {
	return rtlRender(component, {
		wrapper: TestWrapper(store),
		...renderOptions,
	});
};

const TestWrapper = (store: Store) => {
	const storeRender = ({ children }: { children?: ReactNode }) => (
		<Provider store={store}>{children}</Provider>
	);

	return storeRender;
};

export * from "@testing-library/react";
// override the built-in render with our own
export { render };
