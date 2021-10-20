import './Loader.scss'

export const Loader: React.FC = () => {

   return (
      <div className='loader'>
         <div className='loader__position'>
            <div className="lds-dual-ring"></div>
         </div>
      </div>
   )
}