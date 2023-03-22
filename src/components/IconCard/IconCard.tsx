import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

interface IconCardComponentProps {
	id: string;
	Icon: React.ReactNode;
	title: string;
	onClick: (
		arg: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => void;
}

const IconCardComponent = ({
	id,
	title,
	Icon,
	onClick,
}: IconCardComponentProps) => (
	<Card sx={{ width: { xs: 250, sm: 300 } }}>
		<CardActionArea
			sx={{
				display: "flex",
				flex: 1,
				justifyContent: "space-between",
				alignItems: "center",
			}}
			onClick={onClick}
			data-identificator={id}
		>
			<Box display="flex" flexDirection="column">
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						{title}
					</Typography>
				</CardContent>
			</Box>
			<Box p={2}>{Icon}</Box>
		</CardActionArea>
	</Card>
);

export default IconCardComponent;
