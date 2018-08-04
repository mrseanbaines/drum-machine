import React from 'react';

const DrumPad = (props) => {
  const { key, sound } = props.pad;

  return (
    <div>
      <div
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
      </div>
      <span>{sound}</span>
    </div>
  );
}

export default DrumPad;
