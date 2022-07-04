import { Program } from "modules/Program";
import { recordsApi } from 'api/record'
import { wrapper } from 'store'

export default Program;

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async ({
		params,
	}) => {
		try {
			const programTypeId = params?.programType as string
			store.dispatch(recordsApi.endpoints.getRecords.initiate({ programType: programTypeId }))
			await Promise.all(recordsApi.util.getRunningOperationPromises())

			return {
				props: {},
			};
		} catch {
			return {
				notFound: true
			}
		}
	});
