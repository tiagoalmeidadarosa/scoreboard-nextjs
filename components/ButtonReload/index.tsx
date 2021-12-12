import React from 'react';
import { ButtonReloadOutlined } from './styles';

interface ButtonReloadProps {
  onClick: () => void;
}

const ButtonReload = (props: ButtonReloadProps) => {
  return (
    <td colSpan={2}>
      <ButtonReloadOutlined onClick={props.onClick} />
    </td>
  )
}

export default ButtonReload;