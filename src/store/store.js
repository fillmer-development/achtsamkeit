import { createStore, combineReducers } from 'redux'
import CONFIG from 'constants'

const { LOCALSTORAGE } = CONFIG

const datastring = localStorage.getItem(LOCALSTORAGE)
const data = datastring ? JSON.parse(datastring) : undefined

export const store = createStore(combineReducers({

}), data)

store.subscribe(() => {
    state = JSON.stringify(store.getState())
    localStorage.setItem(LOCALSTORAGE, state)
})