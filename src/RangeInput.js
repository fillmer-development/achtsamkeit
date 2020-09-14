import React from 'react'

const RangeInput = ({ value, setValue = f => f }) => {
    return (
        <input
            type="range"
            className='range-input'
            value={value}
            onChange={e => setValue(e.target.value)} />
    )
}

export default RangeInput
