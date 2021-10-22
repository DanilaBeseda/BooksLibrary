export enum CardActionTypes {
   FETCH_CARDS = 'FETCH_CARDS',
   FETCH_TOTAL_ITEMS = 'FETCH_TOTAL_ITEMS',
   SET_CARD_ERROR = 'SET_CARD_ERROR',
   SET_LOADER = 'SET_LOADER',
   SET_LAST_URL_PARAMS = 'SET_LAST_URL_PARAMS',
   ADD_MORE_CARDS = 'ADD_MORE_CARDS',
   SET_START_INDEX = 'SET_START_INDEX',
   CLEAR_ERROR = 'CLEAR_ERROR'
}

export interface Card {
   categories: string[]
   title: 'string'
   authors: string[]
   imageLink: string | null
}

export interface CardState {
   cards: Array<Card>
   totalItems: number
   error: string
   loading: boolean
   lastUrlParams: string,
   startIndex: number
}

interface FetchCardsAction {
   type: CardActionTypes.FETCH_CARDS
   payload: Array<Card>
}

interface FetchTotalItemsAction {
   type: CardActionTypes.FETCH_TOTAL_ITEMS
   payload: number
}

interface SetCardErrorAction {
   type: CardActionTypes.SET_CARD_ERROR
   payload: string
}

interface ShowLoaderAction {
   type: CardActionTypes.SET_LOADER
   payload: boolean
}

interface SetLastUrlParamsAction {
   type: CardActionTypes.SET_LAST_URL_PARAMS
   payload: string
}

interface AddMoreCardsAction {
   type: CardActionTypes.ADD_MORE_CARDS
   payload: Card[]
}

interface SetStartIndexAction {
   type: CardActionTypes.SET_START_INDEX
   payload: number
}

interface ClearErrorAction {
   type: CardActionTypes.CLEAR_ERROR
}

export type CardAction = FetchCardsAction | FetchTotalItemsAction | SetCardErrorAction | ShowLoaderAction | SetLastUrlParamsAction | AddMoreCardsAction | SetStartIndexAction | ClearErrorAction