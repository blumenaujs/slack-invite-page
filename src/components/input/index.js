import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Focus } from 'react-powerplug'

import { green } from '../../utils/colors'

const focusedClass = '-focused'

const StyledInputContainer = styled.div`
  display:flex;
  border:solid 1px red;
  flex-flow: column wrap;
  &.${focusedClass}{
  border:solid 1px green;

    > input {
      border-color:${green}
    }
    >label{
      color:${green}
    }  
  }
  > input {
    border:0;
    border-bottom: solid 1px white;
    background: transparent;
    color:white;
    outline:none;
  }
  label{
    color: white;
  }
`
const Input = ({ label }) => (
  <Focus>
    {({ focused, bind }) => (
      <StyledInputContainer className={focused ? focusedClass : ''} >
        <label htmlFor="">{label}</label>
        <input {...bind} type="text" />
      </StyledInputContainer>)}
  </Focus>
)
Input.propTypes = {
  label: PropTypes.string.isRequired
}

export default Input
