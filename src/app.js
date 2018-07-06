import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Invite from './screens/invite'

const StyledContainer = styled.div`
  background: -webkit-linear-gradient(to top, #4e4376, #2b5876); 
  background: linear-gradient(to top, #4e4376, #2b5876);
  height:100%;
`

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
    font-family: 'Montserrat', sans-serif;
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
      <StyledContainer>
        <Invite />
      </StyledContainer>
    )
  }
}

export default App
