import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { DesktopHeader } from "./components/Desktop";
import { MobileHeader } from "./components/Mobile";

const HeaderComponent = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<DesktopHeader />
					<MobileHeader />
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default HeaderComponent;
