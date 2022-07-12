import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import type { ComponentWithChildren } from "types";

const GridComponent = ({ children }: ComponentWithChildren) => (
	<Fade in>
		<Grid
			data-testid="items-list"
			container
			spacing={2}
			sx={{ flexDirection: { xs: "column", sm: "row" } }}
			justifyContent="center"
			alignItems="center"
		>
			{children}
		</Grid>
	</Fade>
);

export default GridComponent;
