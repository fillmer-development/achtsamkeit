import React from 'react';
import { connect } from 'react-redux';
import DateSelector from './DateSelector';
import Moments from './Moment';
import Note from './Note';
import { updateJournal } from './store/journal';
import './style.scss';
import RangeInput from './RangeInput';
import { mapProductivityToHSL } from './utils';
import { useEffect } from 'react';
import Productivity from './Productivity';

const App = ({ timestamp, entry = {}, updateFactory = f => f }) => {
  const update = updateFactory(timestamp)
  useEffect(() => {
    const stylesheet = document.styleSheets[0]
    stylesheet.removeRule(0)
    stylesheet.addRule(
      'body',
      `background-color: ${mapProductivityToHSL(entry.productivity)}`,
      0)
  }, [entry.productivity])
  return (
    <div className="app">
      <DateSelector />
      <Moments
        value={entry.moment || ""}
        setValue={moment => update({ ...entry, moment })}
      />
      <Note
        value={entry.note || ""}
        setValue={note => update({ ...entry, note })}
      />
      <Productivity
        value={entry.productivity || ""}
        setValue={productivity => update({ ...entry, productivity })}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  entry: state.journal.entries[state.journal.current],
  timestamp: state.journal.current
})

const mapDispatchToProps = dispatch => ({
  updateFactory: date => entry => dispatch(updateJournal(date, entry))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
