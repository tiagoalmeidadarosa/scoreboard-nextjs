import React from 'react';
import { MinusSquareFilled } from '@ant-design/icons';
import styled from 'styled-components';

const ButtonMinusSquareFilled = styled(MinusSquareFilled)`
    color: red;
    font-size: 40px;
`;

function ButtonMinus(props) {
    return (
        <td>
            <ButtonMinusSquareFilled onClick={props.onClick} />
        </td>
    )
}

export default ButtonMinus