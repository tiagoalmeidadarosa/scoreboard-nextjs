import React from 'react';
import { PlusSquareFilledButton } from './styles';

interface PlusButtonProps {
  onClick: () => void;
}

const PlusButton = (props: PlusButtonProps) => {
  return (
    <td>
      <PlusSquareFilledButton onClick={props.onClick} />
    </td>
  )
}

export default PlusButton;