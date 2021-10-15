export enum SeachActionTypes {
   CHANGE_BOOK_TITLE = 'CHANGE_BOOK_TITLE',
   CHOOSE_BOOK_CATEGORY = 'CHOOSE_BOOK_CATEGORY',
   CHOOSE_BOOK_SORTING_TYPE = 'CHOOSE_BOOK_SORTING_TYPE'
}

export interface SearchState {
   title: string
   category: string
   sortingType: string
}

interface ChangeBookNameAction {
   type: SeachActionTypes.CHANGE_BOOK_TITLE
   payload: string
}

interface ChooseBookCategoryAction {
   type: SeachActionTypes.CHOOSE_BOOK_CATEGORY
   payload: string
}

interface ChooseBookSortingType {
   type: SeachActionTypes.CHOOSE_BOOK_SORTING_TYPE
   payload: string
}

export type SearchAction = ChangeBookNameAction | ChooseBookCategoryAction | ChooseBookSortingType