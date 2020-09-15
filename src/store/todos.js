const { v4 } = require("uuid")

const TASK_CREATED = "todo/task_created"
const TASK_DONE = "todo/task_done"
const TASK_EDITED = "todo/task_edited"
const TASK_DELETED = "todo/task_deleted"

export const createTask = content => ({
    type: TASK_CREATED, content, id: v4(), done: false
})

export const toggleTaskDone = (id, done) => ({
    type: TASK_DONE, id, done
})

export const editTask = (id, content) => ({
    type: TASK_EDITED, id, content
})

export const deleteTask = id => ({
    type: TASK_DELETED, id
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
                state,
                [payload.id]: { ...state[payload.id], payload }
            }
        case TASK_DELETED:
            delete state[payload.id]
            return state

        default:
            return state
    }
}