import { combineReducers } from 'redux'
import { swapiReducer } from './swapiReducer'
import { uiReducer } from './uiReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    ui: uiReducer,
    users: usersReducer,
    swapi: swapiReducer,
})
