export enum SearchActionTypes {
   SET_TITLE = 'SET_TITLE',
   SET_CATEGORY = 'SET_CATEGORY',
   SET_SORTING_METHOD = 'SET_SORTING_METHOD'
}

export interface SearchState {
   title: string
   category: string
   sortingMethod: string
}

interface SetTitleAction {
   type: SearchActionTypes.SET_TITLE
   payload: string
}

interface SetCategoryAction {
   type: SearchActionTypes.SET_CATEGORY
   payload: string
}

interface SetSortingMethodAction {
   type: SearchActionTypes.SET_SORTING_METHOD
   payload: string
}

export type SearchAction = SetTitleAction | SetCategoryAction | SetSortingMethodAction