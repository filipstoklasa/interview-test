import { api } from "./index";

describe("[api] - Check axios instance", () => {
	it("has get method", () => {
		expect(api).toHaveProperty("get");
	});
});
