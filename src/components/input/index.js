import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Focus } from 'react-powerplug'

import { blueGreen } from '../../utils/colors'

const StyledInput = styled.input`
    border:0;
    margin: .5rem 0;
    width:100%;
    font-size:16px;
    padding: .5rem;
    text-align:center;
    border-bottom: solid 1px white;
    background: transparent;
    color:white;
    outline:none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    &.-focused{
      -webkit-box-shadow: 0 1px 0 0 ${blueGreen};
      box-shadow: 0 1px 0 0 ${blueGreen};
      border-bottom: 1px solid ${blueGreen};
      border-color:${blueGreen};
    }
`
const Input = ({ ...rest }) => (
  <Focus>
    {({ focused, bind }) => (
      <StyledInput {...rest} {...bind} className={focused ? '-focused' : ''} type="text" />
    )}
  </Focus>
)
Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input
