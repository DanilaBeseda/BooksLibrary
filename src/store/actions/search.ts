import { SearchActionTypes } from "../../types/search";

export const changeBookTitle = (title: string) => ({
   type: SearchActionTypes.CHANGE_BOOK_TITLE,
   payload: title
})