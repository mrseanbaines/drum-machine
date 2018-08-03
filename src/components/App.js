import React, { Component } from 'react';
import DrumMachine from './DrumMachine';
import DrumPads from './DrumPads';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div>
        <DrumMachine />
        <DrumPads />
        <Display />
      </div>
    );
  }
}

export default App;
