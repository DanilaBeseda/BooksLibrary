import { SearchAction, SearchState, SearchActionTypes } from "../../types/search"

const initialState: SearchState = {
   title: '',
   category: 'all',
   sortingMethod: 'relevance'
}

export const search = (state = initialState, action: SearchAction): SearchState => {
   switch (action.type) {
      case SearchActionTypes.SET_TITLE:
         return { ...state, title: action.payload }
      case SearchActionTypes.SET_CATEGORY:
         return { ...state, category: action.payload }
      case SearchActionTypes.SET_SORTING_METHOD:
         return { ...state, sortingMethod: action.payload }
      default:
         return state
   }
}