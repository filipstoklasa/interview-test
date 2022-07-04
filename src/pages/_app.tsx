import { Layout } from "components/Layout";
import { Error } from "components/Error";
import { wrapper } from "store";
import type { AppProps } from "next/app";
import AbortController from "abort-controller";
import "../styles/globals.css";

// To make next-redux-wrapper work
Object.assign(globalThis, {
	AbortController,
});

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Error />
		</>
	);
}

export default wrapper.withRedux(App);
