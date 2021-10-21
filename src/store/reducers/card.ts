import { CardAction, CardActionTypes, CardState } from "../../types/card"

const initialState: CardState = {
   cards: [],
   totalItems: 0,
   error: '',
   loading: false,
   category: 'all',
   sortingMethod: 'relevance',
   lastUrlParams: '',
   startIndex: 0
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
      case CardActionTypes.SET_LAST_URL_PARAMS:
         return { ...state, lastUrlParams: action.payload }
      case CardActionTypes.ADD_MORE_CARDS:
         return { ...state, cards: action.payload }
      case CardActionTypes.SET_START_INDEX:
         return { ...state, startIndex: action.payload }
      case CardActionTypes.CLEAR_ERROR:
         return { ...state, error: '' }
      default:
         return state
   }
}