import * as React from 'react'
import styled, { ThemeProvider } from '../styled-components'
import { theme } from './styles'

const TitleContainer = styled.h1`
  font-size: 200px;
  background-color: ${({ theme }) => theme.colors.colorPrimary};
`
export interface Props { compiler: string; framework: string; }

function App(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <TitleContainer>Hello world {props.compiler} {props.framework} </TitleContainer>
    </ThemeProvider>
  )
}

export default App
