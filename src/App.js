import React, { Component } from 'react';
import TaBarView from '../src/views/TabBar'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
          <TaBarView>Start</TaBarView>
      </div>
    );
  }
}
export default App;
