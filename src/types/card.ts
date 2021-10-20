export enum CardActionTypes {
   FETCH_CARDS = 'FETCH_CARDS',
   FETCH_TOTAL_ITEMS = 'FETCH_TOTAL_ITEMS'
}

interface Card {
   categories: string[]
   title: 'string'
   authors: string[]
   imageLink: string | null
}

export interface CardState {
   cards: Array<Card> | null
   totalItems: number
}

interface fetchCardsAction {
   type: CardActionTypes.FETCH_CARDS,
   payload: Array<Card>
}

interface fetchTotalItemsAction {
   type: CardActionTypes.FETCH_TOTAL_ITEMS,
   payload: number
}

export type CardAction = fetchCardsAction | fetchTotalItemsAction