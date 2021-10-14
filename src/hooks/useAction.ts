import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import * as CardActionCreators from '../store/actions/card'

export const useActions = () => {
   const dispatch = useDispatch()
   return bindActionCreators(CardActionCreators, dispatch)
}