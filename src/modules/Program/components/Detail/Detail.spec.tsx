import { DetailModal } from "./index";
import { render, screen, fireEvent, waitFor } from "test/utils";

const initialState = {
	modal: {
		year: "2022",
	},
};

test("[Detail modal component] - modal of fact of the year", async () => {
	render(<DetailModal />, { initialState });

	expect(
		screen.getByText("Fact for year " + initialState.modal.year)
	).toBeVisible();

	// await waitFor(() => {
	// 	expect(screen.getByText(initialState.modal.fact)).toBeVisible();
	// })

	// fireEvent.click(screen.getByTestId("CloseIcon"));
	// expect(screen.queryByTestId("dialog")).not.toBeInTheDocument();
});
