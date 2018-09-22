import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const StyledHeader = styled.header`
  border-bottom: 2px solid ${p => p.theme.black};
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 10px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <h1>Weather app</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default Header
