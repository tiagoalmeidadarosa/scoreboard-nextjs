import React from 'react';
import { useState } from 'react';
import { PlusSquareFilled, MinusSquareFilled, ReloadOutlined } from '@ant-design/icons';

function Home() {
    const [pointA, setPointA] = useState(0);
    const [pointB, setPointB] = useState(0);
    const [setA, setSetA] = useState(0);
    const [setB, setSetB] = useState(0);

    function addPointA() {
        setPointA(pointA + 1);

        if(pointA >= 25 && (pointA - pointB >= 2)) {
            setPointA(0);
            setPointB(0);
            setSetA(setA + 1);
        }
    }

    return (
        <div style={{textAlign:'center', display:'flex', justifyContent:'center', alignItems:'center', height: '50vh'}}>
            <table>
                <tr>
                    {/* <Header /> */}
                    <td colSpan="2">
                        Time A
                    </td>
                    <td colSpan="2">
                        X
                    </td>
                    <td colSpan="2">
                        Time B
                    </td>
                </tr>
                <tr rowSpan="2">
                    <td rowSpan="2" colSpan="2">
                        <h1>{pointA}</h1>
                    </td>
                    <td rowSpan="2" colSpan="1">
                        <h2>{setA}</h2>
                    </td>
                    <td rowSpan="2" colSpan="1">
                        <h2>{setB}</h2>
                    </td>
                    <td rowSpan="2" colSpan="2">
                        <h1>{pointB}</h1>
                    </td>
                </tr>
                <tr />
                <tr>
                    <td>
                        <MinusSquareFilled />
                    </td>
                    <td>
                        <PlusSquareFilled onClick={addPointA} />
                    </td>

                    <td colSpan="2">
                        <ReloadOutlined />
                    </td>

                    <td>
                        <MinusSquareFilled />
                    </td>
                    <td>
                        <PlusSquareFilled />
                    </td>
                </tr>
            </table>
        </div>
    )
}

function Header() {
    return (
        <div>
            Time A X Time B
        </div>
    )
}

export default Home