import { useState, useCallback, MouseEvent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type CardComponentProps = {
	id: string | number;
	title: string;
	releaseYear: number;
	onClick: (arg: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
	image?: string;
	perex?: string;
};

const CardComponent = ({
	id,
	title,
	releaseYear,
	perex,
	image,
	onClick,
}: CardComponentProps) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpander = useCallback(() => {
		setExpanded((prev) => !prev);
	}, []);

	return (
		<Card sx={{ maxWidth: 340 }}>
			<CardActionArea
				onClick={onClick}
				data-identificator={id}
				data-testid={id}
			>
				{image && (
					<Box style={{ position: "relative", height: 300 }}>
						<Image
							src={image}
							layout="fill"
							alt="card-image"
							objectFit="contain"
							objectPosition="center"
							priority
						/>
					</Box>
				)}

				<CardContent>
					<Box
						display="flex"
						flexDirection="row"
						alignItems="center"
						justifyContent="space-between"
					>
						<Tooltip title={title}>
							<Typography gutterBottom variant="subtitle1" noWrap>
								{title}
							</Typography>
						</Tooltip>
					</Box>
					<Typography gutterBottom variant="subtitle2" noWrap>
						{releaseYear}
					</Typography>
					{perex && (
						<Collapse in={expanded}>
							<Typography variant="body2" color="text.secondary">
								{perex}
							</Typography>
						</Collapse>
					)}
				</CardContent>
			</CardActionArea>
			{perex && (
				<Box display="flex" flexDirection="column" alignItems="flex-end">
					<IconButton
						onClick={toggleExpander}
						sx={{ transform: !expanded ? "rotate(0deg)" : "rotate(180deg)" }}
					>
						<ExpandMoreIcon />
					</IconButton>
				</Box>
			)}
		</Card>
	);
};

export default CardComponent;
