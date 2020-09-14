import React from 'react'
import { connect } from 'react-redux'
import Arrow from './icons/Arrow'
import { setDate } from './store/journal'
import { getPrevDay, getNextDay, printDate } from './dateUtils'
import { useEffect } from 'react'

const DateSelector = ({ date, setDate = f => f }) => {
    const goToToday = () => { setDate(Date.now()) }
    useEffect(goToToday, [])
    return (
        <div className="date-selector">
            <div onClick={() => setDate(getPrevDay(date))}>
                <Arrow className='left' />
            </div>
            <div
                onClick={goToToday}
                className="date">{printDate(date)}</div>
            <div onClick={() => setDate(getNextDay(date))}>
                <Arrow className='right' />
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    date: state.journal.current
})

const mapDispatchToProps = dispatch => ({
    setDate: timestamp => dispatch(setDate(timestamp))
})

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector)
