import { combineReducers } from "redux"
import { normalizeTimestamp } from "../utils"
import { TASK_CREATED, TASK_DELETED, todoList } from "./todos"

const JOURNAL_DATE_SET = 'journal/date_set'

export const setDate = timestamp => ({
    type: JOURNAL_DATE_SET, date: normalizeTimestamp(timestamp)
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

export const updateJournal = (timestamp, item) => ({
    type: JOURNAL_UPDATED, timestamp, item
})


export const entries = (state = {}, { type, ...payload }) => {
    switch (type) {
        case JOURNAL_UPDATED:
            return {
                ...state,
                [payload.timestamp]: payload.item
            }
        case TASK_CREATED:
        case TASK_DELETED:
            let today = state[payload.timestamp] || {}
            return {
                ...state,
                [payload.timestamp]: {
                    ...today,
                    todos: todoList(today.todos, { type, ...payload })
                }
            }

        default:
            return state
    }
}

export const journal = combineReducers({ entries, current })