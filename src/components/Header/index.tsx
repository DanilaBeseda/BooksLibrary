import { useState } from 'react'
import { useActions } from '../../hooks/useAction'
import './Header.scss'

export const Header: React.FC = () => {
   const categories: string[] = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
   const sortingTypes: string[] = ['relevance', 'newest']
   const [inputValue, setInputValue] = useState('')
   const { changeBookTitle } = useActions()

   function inputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
      setInputValue(e.target.value)
   }

   function keyPressHandler(e: React.KeyboardEvent<HTMLInputElement>): void {
      if (e.key === 'Enter') {
         changeBookTitle(inputValue)
      }
   }

   return (
      <div className='header'>
         <h1>Search for books</h1>
         <input
            type='text'
            placeholder='Enter the title of the book'
            value={inputValue}
            onChange={inputHandler}
            onKeyPress={keyPressHandler}
         />
         <div className='header__row'>
            <p>Categories</p>
            <select>
               {categories.map((item, index) => (
                  <option key={index} value={index}>{item}</option>
               ))}
            </select>

            <p>Sorting by</p>
            <select>
               {sortingTypes.map((item, index) => (
                  <option key={index} value={index}>{item}</option>
               ))}
            </select>
         </div>
      </div>
   )
}