import React from 'react'

const TextArea = ({ value, setValue = f => f }) => {
    return (
        <textarea value={value} onChange={e => setValue(e.target.value)}>

        </textarea>
    )
}

export default TextArea
