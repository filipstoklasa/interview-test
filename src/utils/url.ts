import { compile } from "path-to-regexp";
import { stringify } from "qs";

type Parameter = Record<string, string | number>;

type Query = Record<string, any>;

type QueryBuildFnCompiler = <
	P extends Parameter | void = void,
	Q extends Query | void = void
>(
	urlData: QueryData<P, Q> | void
) => string;

type QueryBuildFn = (url: string) => QueryBuildFnCompiler;

export type URLsObject = {
	[key: string]: QueryBuildFnCompiler;
};

export type QueryData<
	P extends Parameter | void = void,
	Q extends Query | void = void
> = {
	params?: P;
	query?: Q;
};

/**
 * @param {string} path - Path to get converted.
 * @param {object} data - params to get compiled to path and queries to be appended after path
 */

export const urlBuilder: QueryBuildFn =
	(path: string) =>
	(urlData): string => {
		try {
			let finalPath = path;

			if (urlData?.params) {
				finalPath = compile(path)(urlData.params);
			}

			if (urlData?.query) {
				finalPath += `?${stringify(urlData.query)}`;
			}

			return finalPath;
		} catch {
			return "";
		}
	};
