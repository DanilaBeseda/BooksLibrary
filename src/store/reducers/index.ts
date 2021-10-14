import { combineReducers } from "redux";
import { card } from "./card";

export const rootReducer = combineReducers({
   card
})

export type RootState = ReturnType<typeof rootReducer>