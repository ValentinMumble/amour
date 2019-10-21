import React from 'react';
import styled from 'styled-components';
import { api } from './utils';
import Sound, { SoundProp } from './Sound';

const AppDiv = styled.div`
  color: #eee;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;

const App: React.FC = () => {
  const [amelies, setAmelies] = React.useState([] as SoundProp[]);

  React.useEffect(() => {
    api(`${process.env.PUBLIC_URL}/amelie.json`).then(setAmelies);
  }, []);

  return (
    <AppDiv>
      {amelies.map(amelie => (
        <Sound {...amelie} key={amelie.name}>
          {amelie.name}
        </Sound>
      ))}
    </AppDiv>
  );
};

export default App;
