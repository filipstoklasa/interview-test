import { capitalise } from "../common";

test("[capitalise] - forms capitalised string", () => {
	expect(capitalise("")).toEqual("");
	expect(capitalise("filip")).toEqual("Filip");
});
