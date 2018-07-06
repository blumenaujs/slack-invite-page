import React from 'react'
import styled from 'styled-components'
import { desktop, tablet } from '../../utils/breakpoints'

const StyledContainer = styled.header`
  color: white;
  text-align:center;

  >h1, >p{
    padding: 1rem 0;
  }

  >h1{
    font-size:30px;
  }

  >p {
    font-size:16px;
  }

  @media (min-width: ${tablet}){
    >h1{
      font-size:36px;
    }
    >p {
      font-size:16px;
    }
  }

  @media (min-width: ${desktop}){
    >h1{
      font-size:40px;
    }
    >p {
      font-size:18px;
    }
  }
`

const Title = () => (
  <StyledContainer>
    <h1>BlumenauJS</h1>
    <p>Digite seu email abaixo para se juntar ao BlumenauJS no Slack!</p>
  </StyledContainer>
)

export default Title
