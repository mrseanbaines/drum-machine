import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: '',
    };

    this.displaySound = this.displaySound.bind(this);
  }

  displaySound(sound) {
    this.setState({
      sound
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <DrumPads displaySound={this.displaySound} />
        <Display sound={this.state.sound} />
      </div>
    );
  }
}

export default App;
