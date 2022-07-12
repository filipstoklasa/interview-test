import { NextApiRequest, NextApiResponse } from "next";
import prisma from "db/client";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {

	res.send({
		data: await prisma.db.programType.findMany(),
		count: await prisma.db.programType.count(),
	});
};

export default handler;
