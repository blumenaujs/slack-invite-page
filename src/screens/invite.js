import React, { PureComponent } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { toast } from 'react-toastify'

import Title from './title'
import InviteForm from './invite-form'
import Footer from './footer'
import { API_URL } from '../utils/constants'

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
  
  >.header{
    border:solid 1px red;
  }
`

class Invite extends PureComponent {
  constructor (props) {
    super(props)

    this.sendInvite = this.sendInvite.bind(this)
  }

  sendInvite (email) {
    axios.get(`${API_URL}/email=${email}`)
      .then(() =>
        toast.success('Seu convite foi enviado! Por favor verifique seu e-mail'))
  }

  render () {
    return (
      <StyledInvite>
        <div className='content'>
          <Title />
          <InviteForm onRequestInvite={this.sendInvite} />
        </div>

        <Footer />
      </StyledInvite>

    )
  }
}

export default Invite
