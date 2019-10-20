import React from 'react';
import styled from 'styled-components';
import { api } from './utils';

const AppDiv = styled.div`
  font-family: monospace;
  color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 1vmin);
  margin: 10vh auto;
  width: 60vw;
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
        return <span>{amelie.name}</span>;
      })}
    </AppDiv>
  );
};

export default App;
