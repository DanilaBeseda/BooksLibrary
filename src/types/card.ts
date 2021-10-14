export enum CardActionTypes {
   FETCH_CARDS = 'FETCH_CARDS'
}

interface Card {
   categories: string[]
   title: 'string'
   authors: string[]
   imageLink: string | null
}

export interface CardState {
   cards: Array<Card> | null
}

interface fetchCardsAction {
   type: CardActionTypes.FETCH_CARDS,
   payload: Array<Card>
}

export type CardAction = fetchCardsAction