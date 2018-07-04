import React, { Component } from 'react'
import {injectGlobal} from 'styled-components'
import Invite from './screens/invite'

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  div,
  button,
  input,
  span,
  p,
  li,
  select{
    /* font-family: 'Roboto', sans-serif; */
  }
  html,
  body,
  body > div {
    height: 100%;
  }
`

class App extends Component {
  render () {
    return (
      <Invite />
    )
  }
}

export default App
