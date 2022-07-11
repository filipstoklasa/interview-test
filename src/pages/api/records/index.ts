import { NextApiRequest, NextApiResponse } from "next";
import prisma from "db/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { programTypeId } = req.query;

	const query = {
		where: {
			programTypeId: !isNaN(Number(programTypeId))
				? Number(programTypeId)
				: undefined,
		},
	};

	res.send({
		data: await prisma.db.record.findMany(query),
		count: await prisma.db.record.count(query),
	});
};

export default handler;
