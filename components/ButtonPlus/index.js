import React from 'react';
import { PlusSquareFilled } from '@ant-design/icons';
import styled from 'styled-components';

const ButtonPlusSquareFilled = styled(PlusSquareFilled)`
    color: green;
    font-size: 40px;
`;

function ButtonPlus(props) {
    return (
        <td>
            <ButtonPlusSquareFilled onClick={props.onClick} />
        </td>
    )
}

export default ButtonPlus