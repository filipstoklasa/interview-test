import { useMemo } from "react";
import { apiLocal } from "store/api";
import { STATIC_PAGES } from "constants/menu";
import type { MenuItem } from "constants/menu";

const useMenuList = (): { isLoading: boolean; items: MenuItem[] } => {
	const { data, isLoading } = apiLocal.useGetProgramTypesQuery();

	const items = useMemo(() => {
		let staticItems = [...STATIC_PAGES];
		if (data?.data?.length) {
			staticItems = [
				...staticItems,
				...data.data.map((item) => ({
					title: item.name,
					href: `/programType/${item.id}`,
				})),
			];
		}
		return staticItems;
	}, [data]);

	return { isLoading, items };
};

export default useMenuList;
