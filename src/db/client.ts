import { PrismaClient } from "@prisma/client";

class DBClient {
	db: PrismaClient;
	constructor() {
		this.db = new PrismaClient();
	}
}

export default new DBClient();
