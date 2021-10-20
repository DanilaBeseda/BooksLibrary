import { CardAction, CardActionTypes, CardState } from "../../types/card"

const initialState: CardState = {
   cards: null,
   totalItems: 0
}

export const card = (state = initialState, action: CardAction): CardState => {
   switch (action.type) {
      case CardActionTypes.FETCH_CARDS:
         return { ...state, cards: action.payload }
      case CardActionTypes.FETCH_TOTAL_ITEMS:
         return { ...state, totalItems: action.payload }
      default:
         return state
   }
}