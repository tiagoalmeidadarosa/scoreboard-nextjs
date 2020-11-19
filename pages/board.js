import React from 'react';
import { useState } from 'react';
import { PlusSquareFilled, MinusSquareFilled, ReloadOutlined } from '@ant-design/icons';

function Home() {
    const [pointA, setPointA] = useState(0);
    const [pointB, setPointB] = useState(0);
    const [setA, setSetA] = useState(0);
    const [setB, setSetB] = useState(0);

    function removePointA() {
        if(pointA > 0) {
            setPointA(pointA - 1);
        }
    }

    function addPointA() {
        var value = pointA + 1;
        setPointA(value);

        if(value >= 25 && (value - pointB >= 2)) {
            setPointA(0);
            setPointB(0);
            setSetA(setA + 1);
        }
    }

    function removePointB() {
        if(pointB > 0) {
            setPointB(pointB - 1);
        }
    }

    function addPointB() {
        var value = pointB + 1;
        setPointB(value);

        if(value >= 25 && (value - pointA >= 2)) {
            setPointA(0);
            setPointB(0);
            setSetB(setB + 1);
        }
    }

    function reset() {
        setPointA(0);
        setPointB(0);
        setSetA(0);
        setSetB(0);
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
                        <MinusSquareFilled onClick={removePointA} />
                    </td>
                    <td>
                        <PlusSquareFilled onClick={addPointA} />
                    </td>

                    <td colSpan="2">
                        <ReloadOutlined onClick={reset} />
                    </td>

                    <td>
                        <MinusSquareFilled onClick={removePointB} />
                    </td>
                    <td>
                        <PlusSquareFilled onClick={addPointB} />
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