import { useCallback } from "react";
import { IconCard } from "components/IconCard";
import { Grid } from "components/Grid";
import GridItem from "@mui/material/Grid";
import { useRouter } from "next/router";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";
import type { MouseEvent } from "react";
import { apiLocal } from "store/api";
import { capitalise } from "utils/common";

const HomeModule = () => {
	const { push } = useRouter();
	const { data } = apiLocal.useGetProgramTypesQuery()

	const onNavigate = useCallback(
		(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
			if (e.currentTarget?.dataset?.identificator) {
				push(`/programType/${e.currentTarget.dataset.identificator}`);
			}
		},
		[push]
	);

	return (
		<Grid>
			{data?.data.map((programType) => (
				<GridItem key={programType.id} item>
					<IconCard
						id={programType.id}
						title={capitalise(programType.name)}
						Icon={<LiveTvTwoToneIcon fontSize="large" />}
						onClick={onNavigate}
					/>
				</GridItem>
			))}
		</Grid>
	);
};

export default HomeModule;
