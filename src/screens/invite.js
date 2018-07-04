import React, { Component } from 'react'
import styled from 'styled-components'

import { Input } from '../components'

const StyledContainer = styled.div`
  background: #73C8A9;  
  background: -webkit-linear-gradient(to bottom, #0f2240, #224D93); 
  background: linear-gradient(to bottom, #0f2240, #224D93);
  width:100%;
  height:100%;
`

class Invite extends Component {
  render () {
    return (
      <StyledContainer>
        <Input label='E-mail'/>
      </StyledContainer>
    )
  }
}

export default Invite
