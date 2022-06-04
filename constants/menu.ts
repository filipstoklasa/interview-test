import { ProgramTypes } from "./programTypes";

export const MenuPaths = {
	home: "/",
	[ProgramTypes.series]: `/programType/${ProgramTypes.series}`,
	[ProgramTypes.movie]: `/programType/${ProgramTypes.movie}`,
};

export const PAGES = [
	{
		title: "Home",
		href: MenuPaths.home,
	},
	{
		title: "Series",
		href: MenuPaths.series,
	},
	{
		title: "Movies",
		href: MenuPaths.movie,
	},
];
