import { Program } from "modules/Program";
import { getProgramTypeData, getPagedData } from "utils/data";
import type { GetServerSidePropsContext } from "next";

export default Program;

export const getServerSideProps = ({
	params,
	query,
}: GetServerSidePropsContext<{
	programType: string;
	page: string | undefined;
}>) => {
	const page =
		query?.page && !isNaN(Number(query?.page)) ? Number(query?.page) : 1;
	const data = getProgramTypeData(params?.programType);

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: getPagedData(data, page - 1),
			total: data.length,
			page,
		},
	};
};
