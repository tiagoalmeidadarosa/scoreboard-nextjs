import React from 'react';
import { Span } from './style';

interface SetProps {
  value: number;
}

const Set = (props: SetProps) => {
  return (
    <td rowSpan={2} colSpan={1}>
      <Span>{props.value}</Span>
    </td>
  )
}

export default Set;