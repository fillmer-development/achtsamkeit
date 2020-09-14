import React, { Component } from 'react';
import './style.scss'
import { connect } from 'react-redux';
import { setDate } from './store/journal';
import { useEffect } from 'react';
import DateSelector from './DateSelector';

const App = () => {
  useEffect(setDate, [])
  return (
    <div className="app">
      <DateSelector />
    </div>
  );
}


export default App;
