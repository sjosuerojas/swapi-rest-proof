import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducer/reducer'

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
