import React from 'react'
import TextArea from './TextArea'

const Moment = (props) => {
    return (
        <div className="moment">
            <h2>Glasmomente</h2>
            <TextArea {...props} />
        </div>
    )
}

export default Moment
