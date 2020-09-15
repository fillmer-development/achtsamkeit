import React from 'react'
import RangeInput from './RangeInput'
import { mapProductivityToHSL } from './utils'

const Productivity = ({ value = 50, ...props }) => {
    return (
        <div
            className='productivity'
            style={{ backgroundColor: mapProductivityToHSL(value) }}>
            <h2>Produktivität</h2>
            <RangeInput value={value} {...props} />
            <h3>{value}</h3>
        </div>
    )
}

export default Productivity
