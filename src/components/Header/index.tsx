import './Header.scss'

export const Header: React.FC = () => {
   const categories: string[] = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
   const sortingBy: string[] = ['relevance', 'newest']

   return (
      <div className='header'>
         <h1>Search for books</h1>
         <input type='text' placeholder='Enter the title of the book' />
         <div className='header__row'>
            <p>Categories</p>
            <select>
               {categories.map((item, index) => (
                  <option key={index} value={index}>{item}</option>
               ))}
            </select>

            <p>Sorting by</p>
            <select>
               {sortingBy.map((item, index) => (
                  <option key={index} value={index}>{item}</option>
               ))}
            </select>
         </div>
      </div>
   )
}