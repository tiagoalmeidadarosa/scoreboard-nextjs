import React from 'react';
import styled from 'styled-components'

const Span = styled.span`
  font-size: 40px;
`

function Set(props) {
  return (
    <td rowSpan="2" colSpan="1">
      <Span>{props.value}</Span>
    </td>
  )
}

export default Set