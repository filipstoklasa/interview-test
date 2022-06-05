import Box from "@mui/material/Box";
import { PAGES } from "constants/menu";
import { NavLink } from "components/NavLink";

const DesktopHeader = () => (
	<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} ml={3}>
		{PAGES.map(({ href, title }) => (
			<NavLink key={href} href={href} linkProps={{ color: "#ffff" }}>
				{title}
			</NavLink>
		))}
	</Box>
);

export default DesktopHeader;
