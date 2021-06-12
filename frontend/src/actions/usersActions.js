import { types } from '../store/types'
import { finishLoading, startLoading } from './uiActions'
import { fetchXAuthBasic } from '../helpers/fetch'
import { useToast } from '../helpers/toasts'

const BASE_URL = 'api/users'

/**
 * @alias dispatchers
 **/
const setUsersByName = (records) => ({
    type: types.usersFetchAndOrder,
    payload: records,
})

const setUsersByAge = (records) => ({
    type: types.usersFetchAndFind,
    payload: records,
})

const setUsersByRepeatedWord = (records) => ({
    type: types.usersFetchAndCount,
    payload: records,
})

const usersOnFetchFail = (err) => ({
    type: types.usersOnError,
    payload: err,
})

/**
 * @alias action
 **/
export const startLoadingUsersByName = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const response = await fetchXAuthBasic(`${BASE_URL}/get-all`)

            if (response.ok !== true)
                dispatch(usersOnFetchFail('Error before fetching'))

            const body = await response.json()
            if (body.statusOk) {
                dispatch(setUsersByName(body.data))
                dispatch(finishLoading())
            }
        } catch (error) {
            dispatch(usersOnFetchFail(error))
            useToast({
                icon: 'error',
                title: 'Lo sentimos, el servidor no pudo completar su peticion',
            })
        }
    }
}

export const startLoadingUsersByAge = (age) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const response = await fetchXAuthBasic(`${BASE_URL}/get-age/${age}`)

            if (response.ok !== true)
                dispatch(usersOnFetchFail('Error before fetching'))

            const body = await response.json()
            if (body.statusOk) {
                dispatch(setUsersByAge(body.data))
                dispatch(finishLoading())
            }
        } catch (error) {
            dispatch(usersOnFetchFail(error))
            useToast({
                icon: 'error',
                title: 'Lo sentimos, el servidor no pudo completar su peticion',
            })
        }
    }
}

export const startLoadingUsersByRepeatedWord = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoading())
            const response = await fetchXAuthBasic(
                `${BASE_URL}/get-repeated-letter`
            )

            if (response.ok !== true)
                dispatch(usersOnFetchFail('Error before fetching'))

            const body = await response.json()
            if (body.statusOk) {
                dispatch(setUsersByRepeatedWord(body.data))
                dispatch(finishLoading())
            }
        } catch (error) {
            dispatch(usersOnFetchFail(error))
            useToast({
                position: 'bottom',
                icon: 'error',
                title: 'Lo sentimos, el servidor no pudo completar su peticion',
            })
        }
    }
}
