import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { green } from '../../utils/colors'

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
`

const Button = ({ label, ...rest }) => (
  <StyledButton {...rest}>
    {label}
  </StyledButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired
}

export default Button
