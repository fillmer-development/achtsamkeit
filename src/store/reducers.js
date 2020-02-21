import { ACTIONS } from "./constants"

export const moment = (state = {}, { type, ...payload }) => {
    console.log(payload)
    switch (type) {
        case ACTIONS.SET_MOMENT:
            return { ...state, ...payload }
        default:
            return state
    }
}

export const note = (state = {}, { type, ...payload }) => {
    console.log(payload)
    switch (type) {
        case ACTIONS.SET_NOTE:
            return { ...state, ...payload }
        default:
            return state
    }
}
