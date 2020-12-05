import React from 'react';

function Point(props) {
    return (
        <td rowSpan="2" colSpan="2">
            <span style={{ fontSize: '50px' }}>{props.value}</span>
        </td>
    )
}

export default Point