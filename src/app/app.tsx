import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import styled, { ThemeProvider } from '../styled-components';
import { theme } from './styles';

const TitleContainer = styled.h1`
  font-size: 200px;
  background-color: ${(props) => props.theme.colors.colorPrimary};
`;

export interface Props { compiler?: string; framework?: string; }

const App = (props: Props) => {
  const { compiler, framework } = props;

  return (
    <ThemeProvider theme={theme}>
      <TitleContainer>
        Hello world
        {compiler}
        {framework}
      </TitleContainer>
    </ThemeProvider>
  );
};

export default hot(App);
