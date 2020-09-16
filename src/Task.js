import React, { useEffect, useState } from 'react'
import Trash from './icons/Trash'
import TextInput from './TextInput'

const Task = ({ id, content, done = false, setContent = f => f,
    onToggleDone = f => f, onDelete = f => f }) => {
    const [edit, setEdit] = useState(false)
    useEffect(() => { if (!content) onDelete(id) }, [content])

    if (edit)
        return (
            <div className='task edit'>
                <TextInput value={content} setValue={c => setContent(id, c)} />
                <div onClick={() => setEdit(!edit)} className='button'>
                    <div className="checkmark">&nbsp;</div>
                </div>
                <div onClick={() => onDelete(id)} className='delete button'>
                    <Trash />
                </div>
            </div>
        )

    return (
        <div className={`task ${done ? "done" : ""}`}>
            <div onClick={() => setEdit(!edit)}>{content}</div>
            <div onClick={() => onToggleDone(id, !done)} className="button checkbox">
                <div className="checkmark">&nbsp;</div>
            </div>
        </div>
    )
}

export default Task
