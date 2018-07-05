import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './title'
import InviteForm from './invite-form'

const StyledContainer = styled.div`
  background: -webkit-linear-gradient(to top, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width:100%;
  height:100%;
  display:flex;
  flex-flow:column wrap;
  align-items:center;
  padding-top: 10rem;
`

class Invite extends Component {
  render () {
    return (
      <StyledContainer>
        <Title />
        <InviteForm />
      </StyledContainer>
    )
  }
}

export default Invite
