import React from 'react';
import { ReloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ButtonReloadOutlined = styled(ReloadOutlined)`
    font-size: 20px;
`;

function ButtonReload(props) {
    return (
        <td colSpan="2">
            <ButtonReloadOutlined onClick={props.onClick} />
        </td>
    )
}

export default ButtonReload