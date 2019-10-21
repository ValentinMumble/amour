import React from 'react';
import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';

export interface SoundProp {
  name: string;
}

const SoundDiv = styled(ButtonBase)`
  && {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #5b2245;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
`;

const Sound: React.FC<SoundProp> = props => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  return (
    <SoundDiv onClick={() => audioRef.current && audioRef.current.play()}>
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/sounds/${props.name}.aac`} />
      {props.name}
    </SoundDiv>
  );
};

export default Sound;
