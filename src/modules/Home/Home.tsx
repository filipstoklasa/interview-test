import { useCallback, MouseEvent } from "react";
import { IconCard } from "components/IconCard";
import { Grid } from "components/Grid";
import GridItem from "@mui/material/Grid";
import { useRouter } from "next/router";
import { MenuPaths } from "constants/menu";
import MovieTwoToneIcon from "@mui/icons-material/MovieTwoTone";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";

const HomeModule = () => {
	const { push } = useRouter();

	const onNavigate = useCallback(
		(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
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
					id={MenuPaths.series}
					title="Series"
					Icon={<LiveTvTwoToneIcon fontSize="large" />}
					onClick={onNavigate}
				/>
			</GridItem>
			<GridItem item>
				<IconCard
					id={MenuPaths.movie}
					title="Movies"
					Icon={<MovieTwoToneIcon fontSize="large" />}
					onClick={onNavigate}
				/>
			</GridItem>
		</Grid>
	);
};

export default HomeModule;
