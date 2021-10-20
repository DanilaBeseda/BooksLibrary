import { CardAction, CardActionTypes, CardState } from "../../types/card"

const initialState: CardState = {
   cards: null,
   totalItems: 0,
   error: '',
   loading: false,
   category: 'all',
   sortingMethod: 'relevance'
}

export const card = (state = initialState, action: CardAction): CardState => {
   switch (action.type) {
      case CardActionTypes.FETCH_CARDS:
         return { ...state, cards: action.payload }
      case CardActionTypes.FETCH_TOTAL_ITEMS:
         return { ...state, totalItems: action.payload }
      case CardActionTypes.SET_CARD_ERROR:
         return { ...state, error: action.payload }
      case CardActionTypes.SET_LOADER:
         return { ...state, loading: action.payload }
      case CardActionTypes.SET_CATEGORY:
         return { ...state, category: action.payload }
      case CardActionTypes.SET_SORTING_METHOD:
         return { ...state, sortingMethod: action.payload }
      default:
         return state
   }
}