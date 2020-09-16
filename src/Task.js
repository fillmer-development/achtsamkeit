import React, { useState } from 'react'
import TextInput from './TextInput'

const Task = ({ id, content, done = false, setContent = f => f,
    onToggleDone = f => f, onDelete = f => f }) => {
    const [edit, setEdit] = useState(false)

    if (edit)
        return (
            <div className='task edit'>
                <TextInput value={content} setValue={c => setContent(id, c)} />
                <div className='checkmark'>&nbsp;</div>
                <div onClick={() => onDelete(id)} className='delete'>&times;</div>
            </div>
        )

    return (
        <div className={`task ${done ? "done" : ""}`}>
            <div onClick={() => setEdit(!edit)}>{content}</div>
            <div onClick={() => onToggleDone(id, !done)} className="checkbox">&nbsp;</div>
        </div>
    )
}

export default Task
