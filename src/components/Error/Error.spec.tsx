import { render, screen } from "test/utils";
import { Error } from "./index";

describe("Error wrapper", () => {
	it("shows error from the store", () => {
		const initialState = {
			error: {
				error: "mock error",
			},
		};

		render(<Error />, { initialState });
		expect(screen.getByText(initialState.error.error)).toBeVisible();
		expect(screen.getByTestId("CloseIcon")).toBeVisible();
	});

	it("doesnt show error from the store", () => {
		const initialState = {
			error: {
				error: null,
			},
		};
		render(<Error />, { initialState });

		expect(screen.queryByTestId("CloseIcon")).not.toBeInTheDocument();
	});
});
