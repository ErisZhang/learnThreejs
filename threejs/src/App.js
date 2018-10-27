import React, { Component } from 'react';
import ThreeScene from './components/ThreeScene';
import Mesh from './components/Mesh';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mesh />
      </div>
    );
  }
}

export default App;
