import { types } from '../store/types'

const initialState = {
    error: null,
    fastest_ship: null,
    planets_by_terrain: null,
}

export const swapiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.swapiGetFastestShip:
            return {
                ...state,
                fastest_ship: [...action.payload],
            }
        case types.swapiGetPlanetByTerrain:
            return {
                ...state,
                planets_by_terrain: [...action.payload],
            }
        case types.swapiOnError:
            return {
                ...state,
                error: action.payload,
            }
    }
}
