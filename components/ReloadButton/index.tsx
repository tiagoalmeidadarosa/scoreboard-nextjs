import React from 'react';
import { ReloadOutlinedButton } from './styles';

interface ReloadButtonProps {
  onClick: () => void;
}

const ReloadButton = (props: ReloadButtonProps) => {
  return (
    <td colSpan={2}>
      <ReloadOutlinedButton onClick={props.onClick} />
    </td>
  )
}

export default ReloadButton;