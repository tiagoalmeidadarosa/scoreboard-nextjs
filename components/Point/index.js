import React from 'react';
import styled from 'styled-components'

const Span = styled.span`
  font-size: 50px;
`

function Point(props) {
  return (
    <td rowSpan="2" colSpan="2">
      <Span>{props.value}</Span>
    </td>
  )
}

export default Point