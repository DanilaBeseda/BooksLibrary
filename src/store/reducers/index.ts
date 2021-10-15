import { combineReducers } from "redux";
import { card } from "./card";
import { search } from "./search";

export const rootReducer = combineReducers({
   card,
   search
})

export type RootState = ReturnType<typeof rootReducer>