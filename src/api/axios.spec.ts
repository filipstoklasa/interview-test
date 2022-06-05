import { api } from "./index";

describe("Check axios instance", () => {
	it("has get method", () => {
		expect(api).toHaveProperty("get");
	});

	it("has axios instance", () => {
		expect(api).toHaveProperty("instance");
	});
});
