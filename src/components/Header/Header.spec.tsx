import { render, screen, waitFor } from "test/utils";
import { Header } from "./index";
import { STATIC_PAGES } from "constants/menu";

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

test("[Header component] - Header display menu items with links", async () => {
	render(<Header />)
	expect(screen.getByTestId("progress")).toBeVisible();

	await waitFor(() => {
		for (let i of STATIC_PAGES) {
			expect(screen.getByText(i.title)).toBeVisible();
		}
	})
});
