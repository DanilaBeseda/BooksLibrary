import * as CardActionCreators from './card'
import * as SeachActionCreators from './search'

const ActionCreators = { ...CardActionCreators, ...SeachActionCreators }

export default ActionCreators