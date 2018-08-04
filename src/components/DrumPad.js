import React from 'react';

const DrumPad = (props) => {
  const { pad, sound } = props.pad;

  return (
    <div>
      <div data-pad={pad.toLowerCase()} onClick={props.onClick} className="drum-pad" id={sound}>
        {pad}
        <audio id={pad} className="clip" data-key={pad.toLowerCase()} src={`/sounds/${sound}.wav`}></audio>
      </div>
      <span className="sound">{sound}</span>
    </div>
  );
}

export default DrumPad;
