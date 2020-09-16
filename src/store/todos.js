const { v4 } = require("uuid")

export const TASK_CREATED = "todo/task_created"
export const TASK_DONE = "todo/task_done"
export const TASK_EDITED = "todo/task_edited"
export const TASK_DELETED = "todo/task_deleted"

export const createTask = (timestamp, content) => ({
    type: TASK_CREATED, timestamp, content, id: v4(), done: false
})

export const toggleTaskDone = (id, done) => ({
    type: TASK_DONE, id, done
})

export const editTask = (id, content) => ({
    type: TASK_EDITED, id, content
})

export const deleteTask = (timestamp, id) => ({
    type: TASK_DELETED, id, timestamp
})

export const todos = (state = {}, { type, ...payload }) => {
    switch (type) {
        case TASK_CREATED:
            return {
                ...state,
                [payload.id]: payload
            }
        case TASK_EDITED:
        case TASK_DONE:
            return {
                ...state,
                [payload.id]: { ...state[payload.id], ...payload }
            }
        case TASK_DELETED:
            delete state[payload.id]
            return state

        default:
            return state
    }
}

export const todoList = (state = [], { type, ...payload }) => {
    switch (type) {
        case TASK_CREATED:
            return [...state, payload.id]
        case TASK_DELETED:
            return state.filter(item => item !== payload.id)
        default:
            return state
    }
}