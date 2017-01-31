import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  riddle: require('./riddle').default,
  admin: require('./admin').default,
})

export default rootReducer
