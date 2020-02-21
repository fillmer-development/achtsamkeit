import { createStore, combineReducers } from 'redux'
import { CONFIG } from './constants'
import { moment, note } from './reducers'

const { LOCALSTORAGE } = CONFIG

const datastring = localStorage.getItem(LOCALSTORAGE)
const data = datastring ? JSON.parse(datastring) : undefined

export const store = createStore(combineReducers({
    moment, note
}), data)

store.subscribe(() => {
    const state = JSON.stringify(store.getState())
    localStorage.setItem(LOCALSTORAGE, state)
})