import { ProgramTypes } from "./programTypes";

export const menuPaths = {
	home: "/",
	[ProgramTypes.series]: `/programType/${ProgramTypes.series}`,
	[ProgramTypes.movie]: `/programType/${ProgramTypes.movie}`,
};

export const pages = [
	{
		title: "Home",
		href: menuPaths.home,
	},
	{
		title: "Series",
		href: menuPaths.series,
	},
	{
		title: "Movies",
		href: menuPaths.movie,
	},
];
