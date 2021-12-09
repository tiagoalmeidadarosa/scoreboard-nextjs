import React from 'react';
import { ButtonPlusSquareFilled } from './style';

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