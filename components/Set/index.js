import React from 'react';

function Set(props) {
    return (
        <td rowSpan="2" colSpan="1">
            <span style={{ fontSize: '40px' }}>{props.value}</span>
        </td>
    )
}

export default Set