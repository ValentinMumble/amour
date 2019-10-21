import React from 'react';
import styled from 'styled-components';
import { api } from './utils';
import { ButtonBase } from '@material-ui/core';

const AppDiv = styled.div`
  font-family: monospace;
  color: #eee;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-size: calc(10px + 1vmin);
  height: 100vh;
`;

const Sound = styled(ButtonBase)`
&& {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
`;

interface AmelieProp {
  name: string;
}

const getAmelies = async () => {
  return await api('amelie.json');
};

const App: React.FC = () => {
  const [amelies, setAmelies] = React.useState([] as AmelieProp[]);

  React.useEffect(() => {
    getAmelies().then(setAmelies);
  }, []);

  return (
    <AppDiv>
      {amelies.map(amelie => {
        return <Sound key={amelie.name}>{amelie.name}</Sound>;
      })}
    </AppDiv>
  );
};

export default App;
