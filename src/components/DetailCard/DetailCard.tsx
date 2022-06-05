import Box from "@mui/material/Box";
import type { ComponentWithChildren } from "types";

const DetailCardComponent = ({ children }: ComponentWithChildren) => (
	<Box
		display="flex"
		flexDirection="column"
		justifyContent="center"
		sx={{
			width: { xs: "auto", md: 400 },
			minHeight: 100,
		}}
	>
		{children}
	</Box>
);

export default DetailCardComponent;
