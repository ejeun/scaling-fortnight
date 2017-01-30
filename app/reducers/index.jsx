import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  chat: require('./chat').default,
  user: require('./user').default,
})

export default rootReducer
