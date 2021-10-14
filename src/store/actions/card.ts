import axios from "axios";
import config from '../../config.json'
import { Dispatch } from "react";
import { CardAction, CardActionTypes } from "../../types/card";

export const fetchCards = () => {
   return async (dispatch: Dispatch<CardAction>) => {
      try {
         //todo laoder
         //todo laoder
         //todo laoder

         const res: any = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${'flowers'}+intitle:keyes&key=${config.APITestKey}`)
         const data = res.data.items.map((item: any) => ({
            'categories': item.volumeInfo.categories || ['-'],
            'title': item.volumeInfo.title,
            'authors': item.volumeInfo.authors,
            'imageLink': item.volumeInfo.imageLinks?.thumbnail || null
         }))
         dispatch({ type: CardActionTypes.FETCH_CARDS, payload: data })
         //todo dispatch totalItems
      } catch (e) {
         //todo error
         //todo error
         //todo error
      }
   }
}