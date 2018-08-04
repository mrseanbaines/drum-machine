import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const DisplayName = styled(Flex)`
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  font-size: calc(20vw);
  opacity: 0;
  pointer-events: none;
  transition: all 100ms;
  user-select: none;

  &.active {
    opacity: 1;
  }
`

const Display = (props) => {
  return (
    <DisplayName justifyContent="center" alignItems="center" id="display">
      {props.sound}
    </DisplayName>
  );
}

export default Display;
