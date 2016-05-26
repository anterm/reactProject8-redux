import { createStore, applyMiddleware, combineReducers } from 'redux'
import books from './reducers/books'

const reducer = combineReducers({ books })

// redux middleware
const actionLogger = store => next => action => {
  console.log("action", action)
  return next(action)
}

const createStoreWithMiddleware = applyMiddleware(
  actionLogger
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)
  return store
}