import React, { Component } from 'react';
import DrumPad from './DrumPad';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const Container = styled(Flex)`
  padding: 8px;
  max-width: 60%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 40%;
  }

  @media (min-width: 992px) {
    max-width: 30%;
  }
`

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
    const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
    if (!pad) return;

    const audio = pad.querySelector(`audio`);
    audio.currentTime = 0;
    audio.play();

    this.props.displaySound(audio.dataset.sound);
    this.addTransition(pad);
  }

  addTransition(el) {
    const display = document.querySelector(`#display`);

    el.addEventListener('transitionend', this.removeTransition);
    el.classList.add('active');
    display.classList.add('active');
    display.addEventListener('transitionend', this.removeTransition);
  }

  removeTransition(e) {
    e.target.classList.remove('active');
  }

  render() {
    return (
      <Container id="drum-pads" flexWrap="wrap">
        {pads.map(pad =>
          <DrumPad onClick={this.playSound} key={pad.key} pad={pad} />
        )}
      </Container>
    );
  }
}

export default DrumPads;
