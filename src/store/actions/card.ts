import axios from "axios";
import config from '../../config.json'
import { Dispatch } from "react";
import { CardAction, CardActionTypes } from "../../types/card";

export const fetchCards = (title: string) => {
   return async (dispatch: Dispatch<CardAction>) => {
      try {
         dispatch(showLoader(true))

         const res: any = await axios.get(`https://www.googleapis.com/boks/v1/volumes?q=${title}+intitle:keyes&key=${config.APITestKey}`)

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
   }
}

export const showLoader = (payload: boolean): CardAction => ({
   type: CardActionTypes.SET_LOADER,
   payload
})