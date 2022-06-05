import { Provider } from "react-redux";
import { Layout } from "components/Layout";
import { Error } from "components/Error";
import { store } from "store";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Error />
		</Provider>
	);
}

export default MyApp;
