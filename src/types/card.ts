export enum CardActionTypes {
   FETCH_CARDS = 'FETCH_CARDS',
   FETCH_TOTAL_ITEMS = 'FETCH_TOTAL_ITEMS',
   SET_CARD_ERROR = 'SET_CARD_ERROR',
   SET_LOADER = 'SET_LOADER',
   SET_CATEGORY = 'SET_CATEGORY',
   SET_SORTING_METHOD = 'SET_SORTING_METHOD',
   SET_LAST_URL_PARAMS = 'SET_LAST_URL_PARAMS',
   ADD_MORE_CARDS = 'ADD_MORE_CARDS',
   SET_START_INDEX = 'SET_START_INDEX'
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
   category: string,
   sortingMethod: string,
   lastUrlParams: string,
   startIndex: number
}

interface fetchCardsAction {
   type: CardActionTypes.FETCH_CARDS
   payload: Array<Card>
}

interface fetchTotalItemsAction {
   type: CardActionTypes.FETCH_TOTAL_ITEMS
   payload: number
}

interface setCardErrorAction {
   type: CardActionTypes.SET_CARD_ERROR
   payload: string
}

interface showLoaderAction {
   type: CardActionTypes.SET_LOADER
   payload: boolean
}

interface setCategoryAction {
   type: CardActionTypes.SET_CATEGORY
   payload: string
}

interface setSortingMethodAction {
   type: CardActionTypes.SET_SORTING_METHOD
   payload: string
}

interface setLastUrlParamsAction {
   type: CardActionTypes.SET_LAST_URL_PARAMS
   payload: string
}

interface addMoreCardsAction {
   type: CardActionTypes.ADD_MORE_CARDS
   payload: Card[]
}

interface setStartIndexAction {
   type: CardActionTypes.SET_START_INDEX
   payload: number
}

export type CardAction = fetchCardsAction | fetchTotalItemsAction | setCardErrorAction | showLoaderAction | setCategoryAction | setSortingMethodAction | setLastUrlParamsAction | addMoreCardsAction | setStartIndexAction