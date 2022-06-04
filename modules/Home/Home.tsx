import { useCallback, MouseEvent } from 'react'
import Box from '@mui/material/Box'
import { Card } from "components/Card"
import { Grid } from "components/Grid"
import GridItem from "@mui/material/Grid"
import { useRouter } from 'next/router'
import { MenuPaths } from 'constants/menu'

const HomeModule = () => {
	const { push } = useRouter()

	const onNavigate = useCallback((e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
		if (e.currentTarget?.dataset?.identificator) {
			push(e.currentTarget.dataset.identificator)
		}
	}, [push])

	return (
		<Grid>
			<GridItem item>
				<Card id={MenuPaths.series} title='Series' onClick={onNavigate} />
			</GridItem>
			<GridItem item>
				<Card id={MenuPaths.movie} title='Movies' onClick={onNavigate} />
			</GridItem>
		</Grid>
	)
}

export default HomeModule