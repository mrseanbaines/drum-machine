import React, { Component } from 'react';
import DrumPad from './DrumPad';

const pads = [
  { key: 'Q', sound: 'kick' },
  { key: 'W', sound: 'hat' },
  { key: 'E', sound: 'snare' },
  { key: 'A', sound: 'clap' },
  { key: 'S', sound: 'bass' },
  { key: 'D', sound: 'open-hat' },
  { key: 'Z', sound: 'rise' },
  { key: 'X', sound: 'sparkles' },
  { key: 'C', sound: 'aah' },
]

class DrumPads extends Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.playSound);
  }

  playSound(e) {
    let key;
    if (e.type === 'click') {
      key = e.target.closest('.drum-pad').dataset.key;
    }
    if (e.type === 'keydown') {
      key = e.key;
    }
    const audio = document.querySelector(`.drum-pad[data-key="${key}"] audio`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    this.props.displaySound(audio.dataset.sound);
  }

  render() {
    return (
      <div id="drum-pads">
        {pads.map(pad =>
          <DrumPad onClick={this.playSound} key={pad.key} pad={pad} />
        )}
      </div>
    );
  }
}

export default DrumPads;
