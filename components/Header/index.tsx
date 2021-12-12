import React from 'react';
import { Span } from './styles';

const Header = () => {
  return (
    <tr>
      <td colSpan={2}>
        <Span>TIME A</Span>
      </td>
      <td colSpan={2}>
        x
      </td>
      <td colSpan={2}>
        <Span>TIME B</Span>
      </td>
    </tr>
  )
}

export default Header;