import { api } from "./index";

describe("[api] - Check axios instance", () => {
	it("has get method", () => {
		expect(api).toHaveProperty("get");
	});

	it("[api] - has axios instance", () => {
		expect(api).toHaveProperty("instance");
	});
});
