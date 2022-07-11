import { useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import GridItem from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { Card } from "components/Card";
import { Grid } from "components/Grid";
import { DetailModal } from "./components/Detail";
import { apiLocal } from "store/api";
import { setModalYear } from "store/slices/modal";
import type { MouseEvent, ChangeEvent } from "react";

const ProgramModule = () => {
	const { push, query } = useRouter();
	const { data } = apiLocal.useGetRecordsQuery({ query: { programType: query.programType as string } })
	const dispatch = useDispatch();

	const onNavigate = useCallback(
		async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
			if (e.currentTarget?.dataset?.identificator) {
				dispatch(setModalYear(e.currentTarget?.dataset?.identificator));
			}
		},
		[dispatch]
	);

	const onPageChange = useCallback(
		(_: ChangeEvent<unknown>, page: number) => {
			push(`/programType/${query.programType}?page=${page}`);
		},
		[push, query.programType]
	);

	return (
		<>
			<Grid>
				{data?.data.map((record) => (
					<GridItem key={record.title} item xs={12} sm={5} md={3}>
						<Card
							id={record.releaseYear}
							title={record.title}
							releaseYear={record.releaseYear}
							perex={record.description}
							image={""}
							onClick={onNavigate}
						/>
					</GridItem>
				))}
			</Grid>
			<Box display="flex" justifyContent="center" p={4}>
				{data?.count && <Pagination
					count={Math.ceil(data?.count / 10)}
					page={1}
					onChange={onPageChange}
				/>}
			</Box>
			<DetailModal />
		</>
	);
};

export default ProgramModule;
