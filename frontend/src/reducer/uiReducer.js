import { types } from '../store/types'

const initialState = {
    error: null,
    loading: false,
    checking: true,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiCheckServerLiveness:
            return {
                ...state,
                checking: false,
            }
        case types.uiOnError:
            return {
                ...state,
                error: action.payload,
                checking: false
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}
