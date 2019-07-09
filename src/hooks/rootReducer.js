import { combineReducers } from 'redux'
import { reducer as homeReducer } from './home/reducer'
import { reducer as aboutReducer } from './about/reducer'
const rootReducer = combineReducers({ home: homeReducer, about: aboutReducer })

export default rootReducer
