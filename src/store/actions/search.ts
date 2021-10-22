import { SearchAction, SearchActionTypes } from "../../types/search";

export const changeBookTitle = (title: string) => ({
   type: SearchActionTypes.SET_TITLE,
   payload: title.toLowerCase()
})

export const setCategory = (payload: string): SearchAction => ({
   type: SearchActionTypes.SET_CATEGORY,
   payload
})

export const setSortyngMethod = (payload: string): SearchAction => ({
   type: SearchActionTypes.SET_SORTING_METHOD,
   payload
})