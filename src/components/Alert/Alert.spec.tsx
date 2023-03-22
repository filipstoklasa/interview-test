import { render, screen, fireEvent } from "test/utils";
import { Alert } from "./index";

const errorMessage = "Error has occured";
const testId = "CloseIcon";
const handleClose = jest.fn();

test("[Alert component] - Renders Alert component", () => {
	render(<Alert error={errorMessage} handleClose={handleClose} />);
	fireEvent.click(screen.getByTestId(testId));

	expect(screen.getByText(errorMessage)).toBeVisible();
	expect(screen.getByTestId(testId)).toBeVisible();
	expect(handleClose).toBeCalled();
});
