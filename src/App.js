import React, { Component } from 'react';
import { store } from './store/store';
import './style.scss'

class App extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div className="app">

      </div>
    );
  }
}

export default App;
