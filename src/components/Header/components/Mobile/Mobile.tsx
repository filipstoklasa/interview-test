import { useState, useCallback } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { PAGES } from 'constants/menu'
import { NavLink } from 'components/NavLink';

const MobileHeader = () => {
	const [isMenuOpened, setMenuOpen] = useState<boolean>(false);

	const handleOpenNavMenu = useCallback(() => {
		setMenuOpen(true);
	}, []);

	const handleCloseNavMenu = useCallback(() => {
		setMenuOpen(false);
	}, []);

	return (
		<>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleOpenNavMenu}
				color="inherit"
				sx={{ display: { xs: 'block', md: 'none' } }}
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor="left"
				open={isMenuOpened}
				onClose={handleCloseNavMenu}
			>
				{PAGES.map(({ href, title }) => (
					<MenuItem key={href}>
						<NavLink href={href}>
							{title}
						</NavLink>
					</MenuItem>
				))}
			</Drawer>
		</>
	)
};

export default MobileHeader;
