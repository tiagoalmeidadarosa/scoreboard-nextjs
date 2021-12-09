import React from 'react';
import styled from 'styled-components'

const Span = styled.span`
  font-size: 50px;
`

function Header() {
  return (
    <tr>
      <td colSpan="2">
        <Span>TIME A</Span>
      </td>
      <td colSpan="2">
        x
      </td>
      <td colSpan="2">
        <Span>TIME B</Span>
      </td>
    </tr>
  )
}

export default Header