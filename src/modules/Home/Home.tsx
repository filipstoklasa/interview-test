import * as React from "react";
import { IconCard } from "components/IconCard";
import { Grid } from "components/Grid";
import GridItem from "@mui/material/Grid";
import { useRouter } from "next/router";
import { menuPaths } from "constants/menu";
import MovieTwoToneIcon from "@mui/icons-material/MovieTwoTone";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";

const HomeModule = () => {
	const { push } = useRouter();

	const onNavigate = React.useCallback(
		(e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
			if (e.currentTarget?.dataset?.identificator) {
				push(e.currentTarget.dataset.identificator);
			}
		},
		[push]
	);

	return (
		<Grid>
			<GridItem item>
				<IconCard
					id={menuPaths.series}
					title="Series"
					Icon={<LiveTvTwoToneIcon fontSize="large" />}
					onClick={onNavigate}
				/>
			</GridItem>
			<GridItem item>
				<IconCard
					id={menuPaths.movie}
					title="Movies"
					Icon={<MovieTwoToneIcon fontSize="large" />}
					onClick={onNavigate}
				/>
			</GridItem>
		</Grid>
	);
};

export default HomeModule;
