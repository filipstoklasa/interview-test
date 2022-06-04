import type { ReactNode } from "react";

export type ComponentWithChildren<T = {} | void> = T & { children: ReactNode };
