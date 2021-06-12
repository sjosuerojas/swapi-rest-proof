import { types } from '../store/types'
import { finishLoading, startLoading } from './uiActions'
import { fetchXAuthBasic } from '../helpers/fetch'
import { useToast } from '../helpers/toasts'

const BASE_URL = 'api/swapi'

/**
 * @alias dispatchers
 **/
const setFastestShip = (records) => ({
    type: types.swapiGetFastestShip,
    payload: records,
})

const setPlanetsTerrain = (records) => ({
    type: types.swapiGetPlanetByTerrain,
    payload: records,
})

const swapiOnFetchFail = (err) => ({
    type: types.swapiOnError,
    payload: err,
})

/**
 * @alias action
 **/
export const startLoadingFastestShip = (passengers) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const response = await fetchXAuthBasic(
                `${BASE_URL}/get-fastest-api/${passengers}`
            )

            if (response.ok !== true)
                dispatch(swapiOnFetchFail('Error before fetching'))

            const body = await response.json()
            if (body.statusOk) {
                dispatch(setFastestShip(body.data))
                dispatch(finishLoading())
            }
        } catch (error) {
            dispatch(swapiOnFetchFail(error))
            useToast({
                icon: 'error',
                title: 'Lo sentimos, el servidor no pudo completar su peticion',
            })
        }
    }
}
export const startLoadingPlanetsTerrain = (terrain) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const response = await fetchXAuthBasic(
                `${BASE_URL}/get-planet-terrain/${terrain}`
            )

            if (response.ok !== true)
                dispatch(swapiOnFetchFail('Error before fetching'))

            const body = await response.json()
            if (body.statusOk) {
                dispatch(setPlanetsTerrain(body.data))
                dispatch(finishLoading())
            }
        } catch (error) {
            dispatch(swapiOnFetchFail(error))
            useToast({
                icon: 'error',
                title: 'Lo sentimos, el servidor no pudo completar su peticion',
            })
        }
    }
}
