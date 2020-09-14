import React, { Component } from 'react';
import './style.scss'
import { connect } from 'react-redux';
import { setDate } from './store/journal';
import { useEffect } from 'react';

const App = ({ date, setDate = f => f }) => {
  useEffect(setDate, [])
  return (
    <div className="app">
      {date}
    </div>
  );
}

const mapStateToProps = state => ({
  date: state.journal.current
})

const mapDispatchToProps = dispatch => ({
  setDate: () => dispatch(setDate((new Date()).toLocaleDateString()))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
