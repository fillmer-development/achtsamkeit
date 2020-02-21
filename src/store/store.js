import { createStore, combineReducers } from 'redux'
import { CONFIG } from './constants'
import { moment } from './reducers'

const { LOCALSTORAGE } = CONFIG

const datastring = localStorage.getItem(LOCALSTORAGE)
const data = datastring ? JSON.parse(datastring) : undefined

export const store = createStore(combineReducers({
    moment
}), data)

store.subscribe(() => {
    const state = JSON.stringify(store.getState())
    localStorage.setItem(LOCALSTORAGE, state)
})