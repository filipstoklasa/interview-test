import { Program } from "modules/Program";
import { records } from 'api/records/record'
import { wrapper } from 'store'

export default Program;

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async ({
		params,
	}) => {
		try {
			const programTypeId = params?.programType as string
			store.dispatch(records.endpoints.getRecords.initiate({ programType: programTypeId }))
			await Promise.all(records.util.getRunningOperationPromises())

			return {
				props: {},
			};
		} catch {
			return {
				notFound: true
			}
		}
	});
