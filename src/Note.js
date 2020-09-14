import React from 'react'
import TextArea from './TextArea'

const Note = (props) => {
    return (
        <div className="note">
            <h2>Notizen</h2>
            <TextArea {...props} />
        </div>
    )
}

export default Note
