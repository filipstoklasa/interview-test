import { Program } from "modules/Program";
import { getProgramTypeData, getPagedData } from "utils/data";
import type { NextPage, GetServerSidePropsContext } from "next";
import type { DataRecord } from "types";

type ProgramProps = {
	data: DataRecord[];
	total: number;
	page: number;
};

const ProgramPage: NextPage<ProgramProps> = (props) => <Program {...props} />;

export default ProgramPage;

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
