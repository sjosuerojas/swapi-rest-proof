import { types } from '../store/types'
import { fetchXAuthBasic } from '../helpers/fetch'
import { useToast } from '../helpers/toasts'
import Swal from 'sweetalert2'

const BASE_URL = 'api'

/**
 * @alias dispatchers
 **/
export const startLoading = () => ({
    type: types.uiStartLoading,
})

export const finishLoading = () => ({
    type: types.uiFinishLoading,
})

export const failOnConnecting = (errors) => ({
    type: types.uiOnError,
    payload: errors
})

export const checkingServerLiveness = () => ({
    type: types.uiCheckServerLiveness,
})

/**
 * @alias action
 **/
export const startCheckingLiveness = () => {
    return async (dispatch) => {
        try {
            const response = await fetchXAuthBasic(`${BASE_URL}/welcome`)
            if (response.ok !== true) dispatch(failOnConnecting('Before stabling conection with server...'))

            const body = await response.json()
            if (body.statusOk) {
                dispatch(checkingServerLiveness())
                useToast({
                    timer: 1500,
                    icon: 'success',
                    title: 'Servidor verificado',
                })
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Lo sentimos',
                text: 'No fue posible establecer la conexión con el servidor',
                allowEscapeKey: false,
                allowEnterKey: false,
                confirmButtonText: 'Volver a intentar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload()
                }
            })
            dispatch(failOnConnecting('It could not be stablish a conection'))
        }
    }
}
