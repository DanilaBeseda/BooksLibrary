import { CardAction, CardActionTypes, CardState } from "../../types/card"


const initialState: CardState = {
   cards: null,
}

export const card = (state = initialState, action: CardAction): CardState => {
   switch (action.type) {
      case CardActionTypes.FETCH_CARDS:
         return { ...state, cards: action.payload }
      default:
         return state
   }
}