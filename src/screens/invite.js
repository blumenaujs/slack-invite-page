import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './title'
import InviteForm from './invite-form'
import Footer from './footer'

const StyledInvite = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-flow:column wrap;
  align-items:center;
  justify-content:center;

  >.content{
    padding: 3rem 0;
    width:100%;
    display:flex;
    flex-flow: column wrap;
    align-items:center;
    justify-content:center;
  }
`

class Invite extends Component {
  render () {
    return (
      <StyledInvite>

        <div className='content'>
          <Title />
          <InviteForm />
        </div>

        <Footer />

      </StyledInvite>

    )
  }
}

export default Invite
