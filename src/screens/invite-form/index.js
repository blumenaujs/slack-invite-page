import React from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../components'

const StyledForm = styled.form`
  display:flex;
  justify-content:center;
  flex-flow: column wrap;
  width:100%;
  max-width:400px;
  padding: 1rem 0;
`

const InviteForm = () => (
  <StyledForm>
    <Input />
    <Button label='Enviar' />
  </StyledForm>)

export default InviteForm
