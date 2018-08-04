import React, { Component } from 'react';
import DrumPad from './DrumPad';

const pads = [
  { pad: 'Q', sound: 'kick' },
  { pad: 'W', sound: 'hat' },
  { pad: 'E', sound: 'snare' },
  { pad: 'A', sound: 'clap' },
  { pad: 'S', sound: 'bass' },
  { pad: 'D', sound: 'open-hat' },
  { pad: 'Z', sound: 'rise' },
  { pad: 'X', sound: 'sparkles' },
  { pad: 'C', sound: 'aah' },
]

class DrumPads extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.handleEvent);
  }

  handleEvent(e) {
    let el;
    if (e.type === 'click') {
      el = e.target.closest('.drum-pad').dataset.pad;
    }
    if (e.type === 'keydown') {
      el = e.key;
    }
    const audio = document.querySelector(`audio[data-key="${el}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    return (
      <div id="drum-pads">
        {pads.map(pad =>
          <DrumPad onClick={this.handleEvent} key={pad.pad} pad={pad} />
        )}
      </div>
    );
  }
}

export default DrumPads;
