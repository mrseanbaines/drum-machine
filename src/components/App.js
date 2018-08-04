import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import DrumPads from './DrumPads';
import Display from './Display';

const Title = styled.h1`
    color: #fff;
    margin: 0;
`

const Subtitle = styled.p`
    color: #fff;
`

const Author = styled.p`
  &,
  a {
    color: #fff;
  }
`

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
      <Flex flexDirection="column" alignItems="center" justifyContent="center" id="drum-machine">
        <Title>
          Drum Machine
        </Title>
        <Subtitle>
          Click or press a key
        </Subtitle>
        <DrumPads displaySound={this.displaySound} />
        <Display sound={this.state.sound} />
        <Author>
          by&nbsp;
            <a
              href="https://seanbaines.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            Sean Baines
          </a>
        </Author>
      </Flex>
    );
  }
}

export default App;
