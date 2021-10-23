import { useHistory } from 'react-router'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Card } from '../../types/card'

import './CardList.scss'

export const CardList: React.FC<{ pagination: number }> = ({ pagination }) => {
   const { LoadMoreCards, setActiveCard } = useActions()
   const { cards, totalItems, lastUrlParams, startIndex } = useTypedSelector(store => store.card)
   const history = useHistory()
   const cls = ['load-more']

   function clickBtnHandler(): void {
      LoadMoreCards(lastUrlParams, cards, startIndex, pagination, totalItems)
   }

   function clickCardHandler(card: Card): void {
      setActiveCard(card)
      history.push(`/${card.id}`)
   }

   if (startIndex + pagination >= totalItems) {
      cls.push('invisible')
   }

   return (
      <div className='container'>
         <div className='card-list'>
            <p>{`Found ${totalItems} results`}</p>
            <div className='card-list__grid grid'>

               {cards?.map((card, index) => (
                  <div
                     key={index}
                     className='grid__card card'
                     onClick={() => clickCardHandler(card)}
                  >
                     <div className='card__image'>
                        <img src={card.imageLink || 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cXVlc3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} alt='book' />
                     </div>
                     <h4 className='card__categories'>{card.categories?.map((category, index) => <span key={index}>{category}</span>)}</h4>
                     <h3>{card.title.length > 64 ? `${card.title.slice(0, 64)}...` : card.title}</h3>
                     <h4 className='card__authors'>{card.authors?.slice(0, 3).map((author, index) => <span key={index}>{author}</span>)}</h4>
                  </div>
               ))}

            </div>
            {totalItems ? <button className={cls.join(' ')} onClick={clickBtnHandler}>Load More</button> : null}
         </div>
      </div>
   )
}