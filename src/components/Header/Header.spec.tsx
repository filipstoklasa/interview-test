import { render, screen } from "test/utils";
import { Header } from "./index";
import { pages } from "constants/menu";

jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: "",
			asPath: "",
			isReady: true,
			push: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		};
	},
}));

test("[Header component] - Header display menu items with links", () => {
	render(<Header />);

	for (let i of pages) {
		expect(screen.getByText(i.title)).toBeVisible();
	}
});
