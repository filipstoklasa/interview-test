import { Home } from "modules/Home";
import { apiLocal } from "store/api"
import { wrapper } from 'store'

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		try {
			store.dispatch(apiLocal.endpoints.getProgramTypes.initiate())
			await Promise.all(apiLocal.util.getRunningOperationPromises())

			return {
				props: {},
			};
		} catch {
			return {
				notFound: true
			}
		}
	});
