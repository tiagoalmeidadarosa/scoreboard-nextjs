import React from 'react';
import { MinusSquareFilledButton } from './styles';

interface MinusButtonProps {
  onClick: () => void;
}

const MinusButton = (props: MinusButtonProps) => {
  return (
    <td>
      <MinusSquareFilledButton onClick={props.onClick} />
    </td>
  )
}

export default MinusButton;