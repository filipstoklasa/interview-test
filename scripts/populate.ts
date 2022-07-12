import { PrismaClient } from "@prisma/client";
import records from "./records.json";
import programTypes from "./programTypes.json";

const main = async () => {
	const prisma = new PrismaClient();
	let programTypesResource = await prisma.programType.findMany();

	if (!programTypesResource.length) {
		for (let type of programTypes) {
			await prisma.programType.create({ data: type });
		}
		programTypesResource = await prisma.programType.findMany();
	}

	for (let { programType, ...record } of records) {
		const programTypeItem = programTypesResource.find(
			(type) => type.name === programType
		);

		if (programTypeItem?.id) {
			await prisma.record.create({
				data: {
					...record,
					programType: { connect: { id: programTypeItem.id } },
				},
			});
		}
	}
};

main();
