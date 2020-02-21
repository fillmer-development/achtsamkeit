import React from 'react'
import { store } from '../store/store'
import { setMoment } from '../store/actions';
import './notes.css'

export const Notes = () => {
    let _input;
    const { text = "" } = store.getState().note

    const save = () => {
        console.log(_input)
        store.dispatch(
            setMoment(_input.innerHTML)
        )
    }
    const init = () => _input.innerHTML = text
    setTimeout(init, 200)
    return (
        <div>
            <h2>Notizen</h2>
            <div contentEditable
                ref={v => _input = v}
                onBlur={save}
                defaultValue={text}
                className="theme-l1 note w3-round w3-mobile w3-padding">
            </div>
        </div>
    )
}