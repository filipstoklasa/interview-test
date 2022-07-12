import AbortController from "abort-controller";
import { Layout } from "components/Layout";
import { Error } from "modules/Error";
import { wrapper } from "store";
import type { AppProps } from "next/app";
import "../styles/globals.css";

Object.assign(globalThis, {
	AbortController,
});

function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
			<Error />
		</Layout>
	);
}

export default wrapper.withRedux(App);
