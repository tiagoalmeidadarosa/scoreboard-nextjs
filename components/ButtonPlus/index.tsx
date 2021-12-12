import React from 'react';
import { ButtonPlusSquareFilled } from './styles';

interface ButtonPlusProps {
  onClick: () => void;
}

const ButtonPlus = (props: ButtonPlusProps) => {
  return (
    <td>
      <ButtonPlusSquareFilled onClick={props.onClick} />
    </td>
  )
}

export default ButtonPlus;