import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Focus } from 'react-powerplug'

import { green } from '../../utils/colors'

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

    ::-webkit-input-placeholder {
      color: #ccc;
      text-transform:uppercase;
    }
    ::-moz-placeholder {
      color: #ccc;
      text-transform:uppercase;
    }
    :-ms-input-placeholder {
      color: #ccc;
      text-transform:uppercase;
    }
    :-moz-placeholder {
      color: #ccc;
      text-transform:uppercase;
    }

      &.-focused{
      -webkit-box-shadow: 0 1px 0 0 ${green};
      box-shadow: 0 1px 0 0 ${green};
      border-bottom: 1px solid ${green};
      border-color:${green};
    }
`
const Input = ({ ...rest }) => (
  <Focus>
    {({ focused, bind }) => (
      <StyledInput {...rest} {...bind} className={focused ? '-focused' : ''} />
    )}
  </Focus>
)
Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input
