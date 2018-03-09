import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import race from './race'
import runs from './runs'
import singleRun from './singleRun'

const reducer = combineReducers({user, race, runs, singleRun})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './race'
export * from './runs'
export * from './singleRun'
