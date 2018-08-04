import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Display from './Display';

class DrumMachine extends Component {
  render() {
    return (
      <div id="drum-machine">
        <DrumPads />
        <Display />
      </div>
    );
  }
}

export default DrumMachine;
