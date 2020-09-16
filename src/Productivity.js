import React from 'react'
import RangeInput from './RangeInput'
import { mapProductivityToHSL } from './utils'

const Productivity = ({ value = 50, ...props }) => {
    return (
        <div
            className='productivity'>
            <h2>Produktivität</h2>
            <div style={{ backgroundColor: mapProductivityToHSL(value) }}>
                <RangeInput value={value} {...props} />
                <h3>{value}</h3>
            </div>
        </div>
    )
}

export default Productivity
