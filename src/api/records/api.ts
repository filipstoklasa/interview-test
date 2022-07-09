import { createHydratedApi } from "api/utils/hydratedApi";

export const recordsApi = createHydratedApi("http://localhost:3000/api/", [
	"Records",
]);
