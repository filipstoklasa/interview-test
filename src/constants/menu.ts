export const MenuPaths = {
	home: "/",
};

export type MenuItem = {
	title: string;
	href: string;
};

export const STATIC_PAGES: MenuItem[] = [
	{
		title: "Home",
		href: MenuPaths.home,
	},
];
