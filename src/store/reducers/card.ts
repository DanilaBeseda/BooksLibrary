import { CardAction, CardActionTypes, CardState } from "../../types/card"

const initialState: CardState = {
   cards: [],
   totalItems: 0,
   error: '',
   loading: false,
   lastUrlParams: '',
   startIndex: 0,
   activeCard: null
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
      case CardActionTypes.SET_LAST_URL_PARAMS:
         return { ...state, lastUrlParams: action.payload }
      case CardActionTypes.ADD_MORE_CARDS:
         return { ...state, cards: action.payload }
      case CardActionTypes.SET_START_INDEX:
         return { ...state, startIndex: action.payload }
      case CardActionTypes.CLEAR_ERROR:
         return { ...state, error: '' }
      case CardActionTypes.SET_ACTIVE_CARD:
         return { ...state, activeCard: action.payload }
      default:
         return state
   }
}