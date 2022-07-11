import { Program } from "modules/Program";
import { apiLocal } from "store/api"
import { wrapper } from 'store'

export default Program;

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async ({
		params,
	}) => {
		try {
			const programTypeId = params?.programType as string
			store.dispatch(apiLocal.endpoints.getRecords.initiate({ query: { programType: programTypeId } }))
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
