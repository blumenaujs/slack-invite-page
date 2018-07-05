import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.header`
  color: white;
  text-align:center;
  padding: 2rem 0;
  >h1{
    margin: 1rem 0;
  }
  >p {
    font-size:18px;
  }
`

const Title = () => (
  <StyledContainer>
    <h1>BlumenauJS</h1>
    <p>Digite seu email abaixo para se juntar ao BlumenauJS no Slack!</p>
  </StyledContainer>
)

export default Title
