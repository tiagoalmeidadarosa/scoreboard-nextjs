import React from 'react';
import { useState } from 'react';
import GlobalStyle from '../components/GlobalStyles';
import Header from '../components/Header';
import Point from '../components/Point';
import Set from '../components/Set';
import ButtonMinus from '../components/ButtonMinus';
import ButtonPlus from '../components/ButtonPlus';
import ButtonReload from '../components/ButtonReload';

function Board() {
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
            <GlobalStyle blackColor />
            <table>
                <Header />

                <tr rowSpan="2">
                    <Point value={pointA} />
                    <Set value={setA} />

                    <Set value={setB} />
                    <Point value={pointB} />
                </tr>
                <tr />
                <tr>
                    <ButtonMinus onClick={removePointA} />
                    <ButtonPlus onClick={addPointA} />

                    <ButtonReload onClick={reset} />
                    
                    <ButtonMinus onClick={removePointB} />
                    <ButtonPlus onClick={addPointB} />
                </tr>
            </table>
        </div>
    )
}

export default Board