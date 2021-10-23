import { useTypedSelector } from '../../hooks/useTypedSelector'
import './Card.scss'

export const Card = () => {
   const { category, title } = useTypedSelector(state => state.search)
   const { activeCard } = useTypedSelector(state => state.card)

   return (
      <div className='Card'>
         <div className='Card__img'>
            <img src={activeCard?.imageLink || 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cXVlc3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} alt='book' />
         </div>
         <div className='Card__description dscr'>
            <h4 className='dscr__category'>{category}</h4>
            <h3 className='dscr__title'>{title}</h3>
            <h4 className='dscr__authors'>{activeCard?.authors?.map((author, index) => <span key={index}>{author}</span>)}</h4>
            <a href={activeCard?.previewLink} target='_blank' rel="noreferrer">Watch preview</a>
            <p className='dscr__description'>{activeCard?.description}</p>
         </div>
      </div>
   )
}