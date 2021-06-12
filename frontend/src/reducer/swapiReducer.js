import { types } from '../store/types'

const initialState = {
    error: null,
    fastesShip: null,
    planetsByTerrain: null,
}

export const swapiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.swapiGetFastestShip:
            return {
                ...state,
                fastesShip: action.payload,
            }
        case types.swapiGetPlanetByTerrain:
            return {
                ...state,
                planetsByTerrain: action.payload,
            }
        case types.swapiOnError:
            return {
                ...state,
                error: action.payload,
            }
        case types.swapiClearPreviousData:
            return initialState
        default:
            return state
    }
}
