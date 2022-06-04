import { MouseEvent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image'

type CardComponentProps = {
	title: string;
	id: string | number;
	onClick: (arg: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
	image?: string;
	perex?: string;
}

const CardComponent = ({ id, title, perex, image, onClick }: CardComponentProps) => (
	<Card sx={{ maxWidth: 345 }}>
		<CardActionArea onClick={onClick} data-identificator={id}>
			{image && (
				<Box style={{ position: "relative", height: 140 }}>
					<Image
						src={image}
						layout='fill'
						alt="card-image"
						objectFit='cover'
						objectPosition="left"
					/>
				</Box>
			)}
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				{perex && (
					<Typography variant="body2" color="text.secondary">
						{perex}
					</Typography>
				)}
			</CardContent>
		</CardActionArea>
	</Card>
)

export default CardComponent
