import { render, screen } from "test/utils";
import { Grid } from "./index";

const text = "test element";
const Children = <span>{text}</span>;

test("Grid component shows children component", () => {
	render(<Grid>{Children}</Grid>);

	expect(screen.getByText(text)).toBeVisible();
});
