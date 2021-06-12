import { combineReducers } from 'redux'
import { swapiReducer } from './swapiReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    swapi: swapiReducer,
})
