import { SearchAction, SearchState, SearchActionTypes } from "../../types/search"

const initialState: SearchState = {
   title: '',
   category: 'all',
   sortingType: 'relevance'
}

export const search = (state = initialState, action: SearchAction): SearchState => {
   switch (action.type) {
      case SearchActionTypes.CHANGE_BOOK_TITLE:
         return { ...state, title: action.payload }
      default:
         return state
   }
}