import React from 'react';
import { Span } from './styles';

interface PointProps {
  value: number;
}

const Point = (props: PointProps) => {
  return (
    <td rowSpan={2} colSpan={2}>
      <Span>{props.value}</Span>
    </td>
  )
}

export default Point;