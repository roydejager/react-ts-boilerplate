import * as React from 'react'

export interface Props { compiler: string; framework: string; }

function App(props: any) {
  return (
    <h1>Hello world {props.compiler} {props.framework} </h1>
  )
}

export default App
