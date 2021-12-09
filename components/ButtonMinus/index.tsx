import React from 'react';
import { ButtonMinusSquareFilled } from './style';

interface ButtonMinusProps {
  onClick: () => void;
}

const ButtonMinus = (props: ButtonMinusProps) => {
  return (
    <td>
      <ButtonMinusSquareFilled onClick={props.onClick} />
    </td>
  )
}

export default ButtonMinus;