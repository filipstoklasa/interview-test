import { render, screen, fireEvent } from "test/utils";
import { Card } from "./index";

const props = {
	id: "cardId",
	title: "cardTitle",
	releaseYear: 2022,
	perex: "cardPerex",
	image: "/cardImage",
	onClick: jest.fn(),
};

test("[Card component] - Loads, display alert component and clicks on the close icon", () => {
	render(<Card {...props} />);

	expect(screen.getByTestId(props.id)).toBeVisible();
	expect(screen.getByText(props.title)).toBeVisible();
	expect(screen.getByText(props.releaseYear)).toBeVisible();
	expect(screen.getByText(props.title)).toBeVisible();
	expect(screen.getByText(props.perex)).not.toBeVisible();

	fireEvent.click(screen.getByTestId("cardId"));
	expect(props.onClick).toBeCalled();

	fireEvent.click(screen.getByTestId("ExpandMoreIcon"));
	expect(screen.getByText(props.perex)).toBeVisible();
});
