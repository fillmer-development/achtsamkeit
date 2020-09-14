import React from 'react'
import RangeInput from './RangeInput'

const Productivity = ({ value = 50, ...props }) => {
    return (
        <div className='productivity'>
            <h2>Produktivität</h2>
            <RangeInput value={value} {...props} />
        </div>
    )
}

export default Productivity
