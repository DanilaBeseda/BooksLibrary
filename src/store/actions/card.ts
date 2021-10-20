import axios from "axios";
import config from '../../config.json'
import { Dispatch } from "react";
import { CardAction, CardActionTypes } from "../../types/card";

export const fetchCards = (title: string, category: string) => {
   return async (dispatch: Dispatch<CardAction>) => {
      dispatch(showLoader(true))
      try {
         const url = 'https://www.googleapis.com/books/v1/volumes?'
         const urlCategory = category === 'all' ? '' : `+subject:${category}`
         const q = `${title}+intitle:${title}` + urlCategory

         const res: any = await axios.get(`${url}q=${q}&key=${config.APITestKey}`)

         const data = res.data.items.map((item: any) => ({
            'categories': item.volumeInfo.categories || ['-'],
            'title': item.volumeInfo.title,
            'authors': item.volumeInfo.authors,
            'imageLink': item.volumeInfo.imageLinks?.thumbnail || null
         }))

         dispatch({ type: CardActionTypes.FETCH_CARDS, payload: data })
         dispatch({ type: CardActionTypes.FETCH_TOTAL_ITEMS, payload: res.data.totalItems })
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