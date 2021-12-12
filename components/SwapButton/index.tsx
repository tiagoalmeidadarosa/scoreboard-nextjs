import React from 'react';
import { SwapOutlinedButton } from './styles';

interface SwapButtonProps {
  onClick: () => void;
}

const SwapButton = (props: SwapButtonProps) => {
  return (
    <td colSpan={2}>
      <SwapOutlinedButton onClick={props.onClick} />
    </td>
  )
}

export default SwapButton;