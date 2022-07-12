import { urlBuilder } from "utils/url";
import type { URLsObject } from "utils/url";

export const Urls: URLsObject = {
	getYearFact: urlBuilder("/:year/year"),
};
