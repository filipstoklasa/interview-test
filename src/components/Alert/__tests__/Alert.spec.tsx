import { render, screen, fireEvent } from "test/utils";
import { Alert } from "../index";

const errorMessage = "Error has occured";
const handleClose = jest.fn();

test("[Alert component] - Renders Alert component", () => {
	render(<Alert error={errorMessage} handleClose={handleClose} />);
	fireEvent.click(screen.getByTestId("CloseIcon"));

	expect(screen.getByText(errorMessage)).toBeVisible();
	expect(screen.getByTestId("CloseIcon")).toBeVisible();
	expect(handleClose).toBeCalled();
});
