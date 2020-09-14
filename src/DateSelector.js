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
            <div className='left' onClick={() => setDate(getPrevDay(date))}>
                <Arrow />
            </div>
            <div
                onClick={goToToday}
                className="date">{printDate(date)}</div>
            <div className='right' onClick={() => setDate(getNextDay(date))}>
                <Arrow />
            </div>
        </div >
    )
}


const mapStateToProps = state => ({
    date: state.journal.current
})

const mapDispatchToProps = dispatch => ({
    setDate: timestamp => dispatch(setDate(timestamp))
})

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector)
