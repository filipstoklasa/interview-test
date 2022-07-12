import { render, screen } from "test/utils";
import { Error } from "../index";

describe("[Error component] - Error wrapper", () => {
	it("[Error component] - shows error from the store", () => {
		const initialState = {
			error: {
				error: "mock error",
			},
		};

		render(<Error />, { initialState });
		expect(screen.getByText(initialState.error.error)).toBeVisible();
		expect(screen.getByTestId("CloseIcon")).toBeVisible();
	});

	it("[Error component] - doesnt show error from the store", () => {
		const initialState = {
			error: {
				error: null,
			},
		};
		render(<Error />, { initialState });

		expect(screen.queryByTestId("CloseIcon")).not.toBeInTheDocument();
	});
});
