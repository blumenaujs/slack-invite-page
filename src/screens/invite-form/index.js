import React from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../components'
import { desktop, tablet } from '../../utils/breakpoints'

const StyledForm = styled.form`
  display:flex;
  justify-content:center;
  flex-flow: column wrap;
  width:100%;
  padding: 1rem 1rem;
  @media (min-width: ${desktop}){
    max-width:500px;
    padding: 1rem 0;
  }
  @media (min-width: ${tablet}){
    max-width:400px;
    padding: 1rem 0;
  }
`

const InviteForm = () => (
  <StyledForm>
    <Input required type='email' placeholder='e-mail'/>
    <Button label='Enviar' />
  </StyledForm>)

export default InviteForm
