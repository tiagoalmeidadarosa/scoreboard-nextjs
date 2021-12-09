import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Point from '../components/Point';
import Set from '../components/Set';
import ButtonMinus from '../components/ButtonMinus';
import ButtonPlus from '../components/ButtonPlus';
import ButtonReload from '../components/ButtonReload';
import { Container } from './style';

const Board = () => {
  const [pointA, setPointA] = useState(0);
  const [pointB, setPointB] = useState(0);
  const [setA, setSetA] = useState(0);
  const [setB, setSetB] = useState(0);

  const removePointA = () => {
    if (pointA > 0) {
      setPointA(pointA - 1);
    }
  }

  const addPointA = () => {
    var value = pointA + 1;
    setPointA(value);

    if (value >= 25 && (value - pointB >= 2)) {
      setPointA(0);
      setPointB(0);
      setSetA(setA + 1);
    }
  }

  const removePointB = () => {
    if (pointB > 0) {
      setPointB(pointB - 1);
    }
  }

  const addPointB = () => {
    var value = pointB + 1;
    setPointB(value);

    if (value >= 25 && (value - pointA >= 2)) {
      setPointA(0);
      setPointB(0);
      setSetB(setB + 1);
    }
  }

  const reset = () => {
    setPointA(0);
    setPointB(0);
    setSetA(0);
    setSetB(0);
  }

  return (
    <Container>
      <table>
        <Header />

        <tr>
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
    </Container>
  )
}

export default Board