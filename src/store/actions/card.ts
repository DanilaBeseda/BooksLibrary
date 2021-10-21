import axios from "axios";
import config from '../../config.json'
import { Dispatch } from "react";
import { Card, CardAction, CardActionTypes } from "../../types/card";

function getData(items: any): Card[] {
   const data = items
      ? items.map((item: any) => ({
         'categories': item.volumeInfo.categories || ['-'],
         'title': item.volumeInfo.title,
         'authors': item.volumeInfo.authors,
         'imageLink': item.volumeInfo.imageLinks?.thumbnail || null
      }))
      : []
   return data
}

export const fetchCards = (title: string, category: string, sortingMethod: string, pagination: number) => {
   return async (dispatch: Dispatch<CardAction>) => {
      dispatch(showLoader(true))
      try {
         const urlCategory = category === 'all' ? '' : `+subject:${category}`
         const q = `${title}+intitle:${title}` + urlCategory + `&orderBy=${sortingMethod}` + `&maxResults=${pagination}`

         const res: any = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${config.APITestKey}`)
         const data = getData(res.data.items)

         dispatch({ type: CardActionTypes.FETCH_CARDS, payload: data })
         dispatch({ type: CardActionTypes.FETCH_TOTAL_ITEMS, payload: res.data.totalItems })
         dispatch({ type: CardActionTypes.SET_LAST_URL_PARAMS, payload: q })
      } catch (e: any) {
         dispatch({ type: CardActionTypes.SET_CARD_ERROR, payload: e.message })
      }
      dispatch(showLoader(false))
   }
}

export const showLoader = (payload: boolean): CardAction => ({
   type: CardActionTypes.SET_LOADER,
   payload
})

export const setCategory = (payload: string): CardAction => ({
   type: CardActionTypes.SET_CATEGORY,
   payload
})

export const setSortyngMethod = (payload: string): CardAction => ({
   type: CardActionTypes.SET_SORTING_METHOD,
   payload
})

export const LoadMoreCards = (urlParams: string, cards: Card[], startIndex: number, pagination: number, totalItems: number) => {
   return async (dispatch: Dispatch<CardAction>) => {
      dispatch(showLoader(true))
      try {
         const res: any = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${urlParams}&startIndex=${startIndex}&key=${config.APITestKey}`)
         const data = [...cards, ...getData(res.data.items)]

         dispatch({ type: CardActionTypes.ADD_MORE_CARDS, payload: data })
         if (startIndex + pagination < totalItems) {
            dispatch({ type: CardActionTypes.SET_START_INDEX, payload: startIndex + pagination })
         }
      } catch (e: any) {
         dispatch({ type: CardActionTypes.SET_CARD_ERROR, payload: e.message })
      }
      dispatch(showLoader(false))
   }
}