import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { green, greenDark } from '../../utils/colors'

const StyledButton = styled.button`
  margin: .5rem 0;
  width: 100%;
  color:white;
  text-transform: uppercase;
  border:0;
  font-size: 16px;
  cursor:pointer;
  padding: 1rem;
  background: ${green};
  transition:100ms ease-in-out;
  outline:0;
  position:relative;
  overflow:hidden;
  &:before{
    content: ' ';
    height:100%;
    width:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:2;
    background:${greenDark};
    transition:100ms ease-in-out;
    top:-100px;
  }
  &:hover{
    &:before{
      top:0;
    }
    border-color:white;
  }
  >.label{
    position:relative;
    z-index:5;
  }
`

const Button = ({ label, ...rest }) => (
  <StyledButton {...rest}>
    <span className='label'>
      {label}
    </span>
    <span className='overlay'></span>
  </StyledButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired
}

export default Button
