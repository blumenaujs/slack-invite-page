import React from 'react'
import styled from 'styled-components'
import { green } from '../../utils/colors'

const StyledFooter = styled.footer`
   position:fixed;
   bottom:0;
   padding: 1rem 0;
  .made-with{
    color:white;
    >.heart{
      font-size: 18px;
      color:${green};
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <span className='made-with' >Made with React and <span className='heart'>❤</span></span>
  </StyledFooter>
)

export default Footer
