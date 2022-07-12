import Box from "@mui/material/Box";
import { Progress } from "components/Progress";
import { NavLink } from "components/NavLink";
import useMenuList from "hooks/useMenuList";

const DesktopHeader = () => {
	const { items, isLoading } = useMenuList()

	return (
		< Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }
		} ml={3} >
			{
				isLoading ? <Progress /> :
					items.map(({ href, title }) => (
						<NavLink key={href} href={href} linkProps={{ color: "#ffff" }}>
							{title}
						</NavLink>
					))
			}
		</Box >
	)
};

export default DesktopHeader;
