import { SeachActionTypes } from "../../types/search";

export const changeBookTitle = (title: string) => ({
   type: SeachActionTypes.CHANGE_BOOK_TITLE,
   payload: title
})