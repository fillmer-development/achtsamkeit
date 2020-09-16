import { createStore, combineReducers } from 'redux'
import { journal } from './journal'
import { todos } from './todos'

const LOCALSTORAGE = 'achtsamkeit-data'

const datastring = localStorage.getItem(LOCALSTORAGE)
const data = datastring ? JSON.parse(datastring) : undefined

export const store = createStore(combineReducers({
    journal, todos
}), data)

store.subscribe(() => {
    const state = JSON.stringify(store.getState())
    localStorage.setItem(LOCALSTORAGE, state)
})

window.store = store