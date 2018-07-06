import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
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

class InviteForm extends PureComponent {
  constructor (props) {
    super(props)

    this.state = { email: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange ({ target }) {
    this.setState({ email: target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onRequestInvite(this.state.email)
  }

  render () {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Input required onChange={this.handleInputChange} type='email' placeholder='e-mail' />
        <Button type='submit' label='Enviar' />
      </StyledForm>)
  }
}

InviteForm.propTypes = {
  onRequestInvite: propTypes.func.isRequired
}

export default InviteForm
