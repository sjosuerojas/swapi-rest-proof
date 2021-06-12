import { types } from '../store/types'

const initialState = {
    error: null,
    usersByName: null,
    usersByAge: null,
    usersByRepeatedWord: null,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.usersFetchAndOrder:
            return {
                ...state,
                usersByName: [...action.payload],
            }
        case types.usersFetchAndFind:
            return {
                ...state,
                usersByAge: [...action.payload],
            }
        case types.usersFetchAndCount:
            return {
                ...state,
                usersByRepeatedWord: [...action.payload],
            }
        case types.usersOnError:
            return {
                ...state,
                error: action.payload,
            }
    }
}
