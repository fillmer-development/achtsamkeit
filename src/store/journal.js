import { combineReducers } from "redux"

const JOURNAL_DATE_SET = 'journal/date_set'

export const setDate = date => ({
    type: JOURNAL_DATE_SET, date
})


export const current = (state = "", { type, ...payload }) => {
    switch (type) {
        case JOURNAL_DATE_SET:
            return payload.date
        default:
            return state
    }
}

const JOURNAL_UPDATED = 'journal/update'

export const update_journal = (date, payload) => ({
    type: JOURNAL_UPDATED, date, payload
})

export const entry = (state = {}, action) => {
    switch (action.type) {
        case JOURNAL_UPDATED:
            return {
                ...state
                //note, moment, productivity,todo... 
            }

        default:
            return state
    }
}


export const entries = (state = {}, action) => {
    switch (action.type) {
        case JOURNAL_UPDATED:
            return {
                ...state,
                [action.date]: entry(state[action.date], action)
            }

        default:
            return state
    }
}

export const journal = combineReducers({ entries, current })