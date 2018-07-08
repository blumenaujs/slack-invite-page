import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import Invite from './screens/invite'
import { green, red } from './utils/colors'
import { GitHubRibbon } from './components'

const StyledContainer = styled.div`
  background: -webkit-linear-gradient(to top, blue, purple); 
  background: linear-gradient(to top, blue, purple);
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
  
  .custom-toast{
    >.Toastify__toast--success{
      background:${green};
    }
    >.Toastify__toast--error{
      background:${red};
    }
  }

  .github-corner:hover .octo-arm{
    animation: octocat-wave 560ms ease-in-out
  }
  
  @keyframes octocat-wave{
      0 %,100%{
          transform: rotate(0)
      }
      20%,60%{
          transform: rotate(-25deg)
      }
      40%,80%{
          transform: rotate(10deg)
      }
  }
  
  @media (max-width:500px){
    .github - corner: hover .octo-arm{
        animation: none
    }
    .github-corner .octo-arm{
        animation: octocat-wave 560ms ease-in-out
    }
    
`

class App extends Component {
  render () {
    return (
      <StyledContainer>
        <GitHubRibbon />
        <Invite />
        <ToastContainer className='custom-toast' />
      </StyledContainer>
    )
  }
}

export default App
