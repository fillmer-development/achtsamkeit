import React from 'react';
import { connect } from 'react-redux';
import DateSelector from './DateSelector';
import Moments from './Moment';
import Note from './Note';
import Productivity from './Productivity';
import { updateJournal } from './store/journal';
import './style.scss';
import TodoList from './TodoList';

const App = ({ timestamp, entry = {}, updateFactory = f => f }) => {
  const update = updateFactory(timestamp)

  return (
    <div className="app">
      <DateSelector />
      <Moments
        value={entry.moment || ""}
        setValue={moment => update({ ...entry, moment })}
      />
      <TodoList />
      <Productivity
        value={entry.productivity || ""}
        setValue={productivity => update({ ...entry, productivity })}
      />
      <Note
        value={entry.note || ""}
        setValue={note => update({ ...entry, note })}
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
