import * as React from 'react'
import styled from '../styled-components'


const TitleContainer = styled.h1`
  font-size: 200px;
`
export interface Props { compiler: string; framework: string; }

function App(props: any) {
  return (
    <TitleContainer>Hello world {props.compiler} {props.framework} </TitleContainer>
  )
}

export default App
