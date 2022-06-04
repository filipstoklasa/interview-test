import { combineReducers } from "@reduxjs/toolkit";
import { reducer as modal } from "./modal";
import { reducer as error } from "./error";

export const reducer = combineReducers({ modal, error });
