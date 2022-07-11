import type {
	AnyAction,
	EnhancedStore,
	Middleware,
} from '@reduxjs/toolkit'
import type { Reducer } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cleanup } from '@testing-library/react'
import { withProvider } from './utils'

export function setupApiStore<
	A extends {
		reducerPath: string
		reducer: Reducer<any, any>
		middleware: Middleware
		util: { resetApiState(): any }
	},
	R extends Record<string, Reducer<any, any>> = Record<never, never>
>(api: A, extraReducers?: R, withoutListeners?: boolean) {
	const getStore = () =>
		configureStore({
			reducer: { api: api.reducer, ...extraReducers },
			middleware: (gdm) =>
				gdm({ serializableCheck: false, immutableCheck: false }).concat(
					api.middleware
				),
		})

	type StoreType = EnhancedStore<
		{
			api: ReturnType<A['reducer']>
		} & {
			[K in keyof R]: ReturnType<R[K]>
		},
		AnyAction,
		ReturnType<typeof getStore> extends EnhancedStore<any, any, infer M>
		? M
		: never
	>

	const initialStore = getStore() as StoreType

	const refObj = {
		api,
		store: initialStore,
		wrapper: withProvider(initialStore),
	}
	let cleanupListeners: () => void

	beforeEach(() => {
		const store = getStore() as StoreType
		refObj.store = store
		refObj.wrapper = withProvider(store)
		if (!withoutListeners) {
			cleanupListeners = setupListeners(store.dispatch)
		}
	})
	afterEach(() => {
		cleanup()
		if (!withoutListeners) {
			cleanupListeners()
		}
		refObj.store.dispatch(api.util.resetApiState())
	})


	return refObj
}