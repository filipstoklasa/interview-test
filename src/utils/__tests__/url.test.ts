import { urlBuilder } from "../url";

test("[urlBuilder]", () => {
	expect(
		urlBuilder("/:id/:name")({ params: { id: 1, name: "Filip" } })
	).toEqual("/1/Filip");

	expect(
		urlBuilder("/:id/:name")({
			params: { id: 1, name: "Filip" },
			query: { programeType: { name: "filip" }, valid: 12 },
		})
	).toEqual("/1/Filip?programeType%5Bname%5D=filip&valid=12");

	expect(urlBuilder("/records")({ query: { programeTypeId: 2 } })).toEqual(
		"/records?programeTypeId=2"
	);
});
