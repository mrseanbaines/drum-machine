import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Column = styled(Box)`
  padding: 8px;
`

const Pad = styled.div`
  border: 1px dashed #f5f6fa;
  color: #f5f6fa;
  border-radius: 50%;
  width: 4em;
  height: 4em;
  line-height: 4em;
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 100ms;
  user-select: none;
  margin: 0 auto;

  :hover {
    border-style: solid;
    color: #9c88ff;
    background: #f5f6fa;
  }

  &.active {
    transform: scale(1.2);
  }
`

const DrumPad = (props) => {
  const { key, sound } = props.pad;

  return (
    <Column width={[6/12, 4/12]}>
      <Pad
        id={sound}
        className="drum-pad"
        data-key={key.toLowerCase()}
        onClick={props.onClick}
      >
        {key}
        <audio
          id={key}
          className="clip"
          data-sound={sound}
          src={`/sounds/${sound}.wav`}
        >
        </audio>
      </Pad>
    </Column>
  );
}

export default DrumPad;
