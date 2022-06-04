import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Header } from 'components/Header'
import type { ComponentWithChildren } from 'types'

const LayoutComponent = ({ children }: ComponentWithChildren) => {
	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Box mt={4}>
					{children}
				</Box>
			</Container>
		</>
	)
}

export default LayoutComponent