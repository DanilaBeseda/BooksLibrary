import axios from 'axios'
import { useEffect, useState } from 'react'

import config from '../../config.json'

import './CardList.scss'

interface ICard {
   categories: string[]
   title: 'string'
   authors: string[]
   imageLink: string | null
}

interface ICards extends Array<ICard> { }

export const CardList: React.FC = () => {
   const [cards, setCards] = useState<ICards | null>(null)
   const [totalItems, setTotalItems] = useState<number | null>(null)

   useEffect(() => {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${'flowers'}+intitle:keyes&key=${config.APITestKey}`).then(req => {
         const data: any = req.data
         setCards(data.items.map((item: any) => ({
            'categories': item.volumeInfo.categories || ['-'],
            'title': item.volumeInfo.title,
            'authors': item.volumeInfo.authors,
            'imageLink': item.volumeInfo.imageLinks?.thumbnail || null
         })))
         setTotalItems(data.totalItems)
      }).catch((e) => console.log(e.message))
   }, [])

   return (
      <div className='card-list'>
         <p>{`Found ${totalItems} results`}</p>
         <div className='card-list__grid grid'>
            {cards?.map((card, index) => (
               <div key={index} className='grid__card card'>
                  <div className='card__image'>
                     <img src={card.imageLink || 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cXVlc3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} alt='book' />
                  </div>
                  <h4 className='card__categories'>{card.categories?.map((category, index) => <span key={index}>{category}</span>)}</h4>
                  <h3>{card.title}</h3>
                  <h4>{card.authors.map((author, index) => <span key={index}>{author}</span>)}</h4>
               </div>
            ))}
         </div>
      </div>
   )
}